import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserOnly } from '../users/user.type';
import { AuthService } from './auth.service';
import {
  LoginArgs,
  LoginResult,
  LoginWithIdTokenArgs,
  RefreshTokenArgs,
  RefreshTokenResult,
  UserRegisterArgs,
} from './auth.type';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResult)
  async login(@Args() args: LoginArgs): Promise<LoginResult> {
    return this.authService.login(args);
  }

  @Mutation(() => LoginResult)
  async loginWithIdToken(@Args() args: LoginWithIdTokenArgs): Promise<LoginResult> {
    return this.authService.loginWithIdToken(args);
  }

  @Mutation(() => UserOnly)
  async register(@Args() args: UserRegisterArgs): Promise<UserOnly> {
    return this.authService.register(args);
  }

  @Mutation(() => RefreshTokenResult)
  async refreshToken(@Args() args: RefreshTokenArgs): Promise<RefreshTokenResult> {
    return this.authService.refreshToken(args.refreshToken);
  }
}
