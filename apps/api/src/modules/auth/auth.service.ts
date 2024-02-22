import { AppConfig } from '@api/configs/type';
import { comparePassword, hashPassword } from '@api/utils/helpers';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { add } from 'date-fns';
import { OAuth2Client } from 'google-auth-library';
import { UsersService } from '../users/users.service';
import {
  JwtPayload,
  LoginArgs,
  LoginResult,
  LoginWithIdTokenArgs,
  RefreshTokenResult,
  RegisterArgs,
} from './auth.type';

@Injectable()
export class AuthService {
  private accessTokenExpiresIn: number;
  private refreshTokenExpiresIn: number;
  private readonly googleClient: OAuth2Client;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<AppConfig>,
    private readonly userService: UsersService
  ) {
    this.googleClient = new OAuth2Client({
      clientId: this.configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
    });
    this.accessTokenExpiresIn =
      this.configService.get<number>('JWT_EXPIRES_IN');
    this.refreshTokenExpiresIn = this.configService.get<number>(
      'JWT_REFRESH_TOKEN_EXPIRES_IN'
    );
  }

  async login(args: LoginArgs): Promise<LoginResult> {
    try {
      // check user invalid
      const user = await this.userService.findFirst({
        where: {
          email: args.email,
        },
      });
      if (!user)
        throw new HttpException("User doesn't exists.", HttpStatus.NOT_FOUND);

      // compare password
      const isPassword = comparePassword(args.password, user.password);
      if (!isPassword)
        throw new HttpException('Password incorrect.', HttpStatus.BAD_REQUEST);

      return {
        accessToken: this.jwtService.sign({
          id: user.id,
          role: user.role,
        }),
        expireTime: add(new Date(), {
          seconds: this.accessTokenExpiresIn,
        }),
        refreshToken: this.jwtService.sign(
          {
            id: user.id,
            isRefreshToken: true,
          },
          {
            expiresIn: this.refreshTokenExpiresIn,
          }
        ),
        profile: user,
      };
    } catch (error) {
      throw new HttpException(
        error?.message ?? 'Internal server.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async loginWithIdToken(args: LoginWithIdTokenArgs): Promise<LoginResult> {
    try {
      const { idToken, provider, role } = args;
      const loginTicket = await this.googleClient.verifyIdToken({
        idToken,
        audience: this.configService.get<string>('GOOGLE_CLIENT_ID'),
      });
      const { email, sub, given_name, family_name, picture } =
        loginTicket.getPayload();

      // get first user match with email
      let user = await this.userService.findFirst({
        where: {
          email,
        },
      });

      if (!user) {
        const hashedPassword = hashPassword(sub); // random password with sub
        user = await this.userService.create({
          data: {
            email,
            role,
            avatarUrl: picture,
            password: hashedPassword,
            firstName: given_name,
            lastName: family_name,
            signInProvider: provider,
            emailVerified: true,
          },
        });
      }

      return {
        accessToken: this.jwtService.sign({
          id: user.id,
          role: user.role,
        }),
        expireTime: add(new Date(), {
          seconds: this.accessTokenExpiresIn,
        }),
        refreshToken: this.jwtService.sign(
          {
            id: user.id,
            isRefreshToken: true,
          },
          {
            expiresIn: this.refreshTokenExpiresIn,
          }
        ),
        profile: user,
      };
    } catch (error) {
      throw new HttpException(
        error?.message ?? 'Internal server.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async register(args: RegisterArgs): Promise<User> {
    try {
      // check user valid
      const user = await this.userService.findFirst({
        where: {
          email: args.email,
        },
      });
      if (user)
        throw new HttpException('User already exists.', HttpStatus.CONFLICT);

      const hashedPassword = hashPassword(args.password);
      const newUser = await this.userService.create({
        data: {
          email: args.email,
          role: args.role,
          password: hashedPassword,
          emailVerified: true,
        },
      });
      return newUser;
    } catch (error) {
      throw new HttpException(
        error?.message ?? 'Internal server.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async refreshToken(refreshToken: string): Promise<RefreshTokenResult> {
    try {
      const payload = this.jwtService.verify<JwtPayload>(refreshToken);
      if (!payload.isRefreshToken)
        throw new HttpException(
          'Tokens are not used for refreshing',
          HttpStatus.BAD_REQUEST
        );

      return {
        accessToken: this.jwtService.sign({
          id: payload.id,
        }),
        expireTime: add(new Date(), {
          seconds: this.accessTokenExpiresIn,
        }),
      };
    } catch (error) {
      throw new HttpException(
        error?.message ?? 'Internal server.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
