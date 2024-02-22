import { ArgsType, Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserOnly } from '../users/user.type';
import { SignInProvider, UserRole } from '@api/@generated';

export enum UserRoleWithoutSupperAdmin {
  admin = UserRole.admin,
  staff = UserRole.staff,
  user = UserRole.user,
}
registerEnumType(UserRoleWithoutSupperAdmin, {
  name: 'UserRoleWithoutSupperAdmin',
});

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
export class RegisterArgs {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => UserRoleWithoutSupperAdmin, {
    nullable: true,
    defaultValue: UserRoleWithoutSupperAdmin.admin,
  })
  role: UserRoleWithoutSupperAdmin;
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
