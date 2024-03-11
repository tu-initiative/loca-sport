import { SignInProvider, UserRole } from '@api/@generated';
import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserOnly } from '../users/user.type';

export enum UserRoleWithoutSupperAdmin {
  admin = UserRole.admin,
  staff = UserRole.staff,
  user = UserRole.user,
}

@InputType()
export class UserRegisterInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => String, { nullable: false })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => UserRole, { nullable: true, defaultValue: UserRole.admin })
  role?: keyof typeof UserRoleWithoutSupperAdmin;
}

@ArgsType()
export class LoginArgs {
  @Field()
  email: string;

  @Field()
  password: string;
}

@ArgsType()
export class LoginWithIdTokenArgs {
  @Field()
  idToken: string;

  @Field(() => UserRole, {
    nullable: true,
    defaultValue: UserRoleWithoutSupperAdmin.admin,
  })
  role: UserRoleWithoutSupperAdmin;

  @Field(() => SignInProvider, {
    nullable: true,
    defaultValue: SignInProvider.google,
  })
  provider: SignInProvider;
}

@ArgsType()
export class UserRegisterArgs {
  @Field(() => UserRegisterInput, { nullable: false })
  @Type(() => UserRegisterInput)
  data!: InstanceType<typeof UserRegisterInput>;
}

@ArgsType()
export class RefreshTokenArgs {
  @Field()
  refreshToken: string;
}

export class JwtPayload {
  @Field()
  id: string;

  @Field()
  isRefreshToken?: boolean;
}

@ObjectType()
export class LoginResult {
  @Field()
  accessToken: string;

  @Field()
  expireTime: Date;

  @Field()
  refreshToken: string;

  @Field(() => UserOnly, { nullable: true })
  profile?: UserOnly;
}

@ObjectType()
export class RefreshTokenResult {
  @Field()
  accessToken: string;

  @Field()
  expireTime: Date;
}
