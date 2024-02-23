import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumFileProviderNullableFilter = {
  equals?: InputMaybe<FileProvider>;
  in?: InputMaybe<Array<FileProvider>>;
  not?: InputMaybe<NestedEnumFileProviderNullableFilter>;
  notIn?: InputMaybe<Array<FileProvider>>;
};

export type EnumSignInProviderNullableFilter = {
  equals?: InputMaybe<SignInProvider>;
  in?: InputMaybe<Array<SignInProvider>>;
  not?: InputMaybe<NestedEnumSignInProviderNullableFilter>;
  notIn?: InputMaybe<Array<SignInProvider>>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type EnumUserStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<UserStatus>;
};

export type EnumUserStatusFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type File = {
  __typename?: 'File';
  _count: FileCount;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  provider?: Maybe<FileProvider>;
  storageId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
};

export type FileCount = {
  __typename?: 'FileCount';
  users: Scalars['Int']['output'];
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  storageId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  url: Scalars['Int']['output'];
};

export type FileCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<FileCreateWithoutUsersInput>;
};

export type FileCreateOrConnectWithoutUsersInput = {
  create: FileCreateWithoutUsersInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<FileProvider>;
  storageId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<FileProvider>;
  storageId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<FileProvider>;
  storageId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FileNullableRelationFilter = {
  is?: InputMaybe<FileWhereInput>;
  isNot?: InputMaybe<FileWhereInput>;
};

export type FileOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrderInput>;
  storageId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export enum FileProvider {
  Cloudinary = 'cloudinary',
  S3 = 's3'
}

export type FileUpdateOneWithoutUsersNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<FileCreateWithoutUsersInput>;
  delete?: InputMaybe<FileWhereInput>;
  disconnect?: InputMaybe<FileWhereInput>;
  update?: InputMaybe<FileUpdateToOneWithWhereWithoutUsersInput>;
  upsert?: InputMaybe<FileUpsertWithoutUsersInput>;
};

export type FileUpdateToOneWithWhereWithoutUsersInput = {
  data: FileUpdateWithoutUsersInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpdateWithoutUsersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<NullableEnumFileProviderFieldUpdateOperationsInput>;
  storageId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpsertWithoutUsersInput = {
  create: FileCreateWithoutUsersInput;
  update: FileUpdateWithoutUsersInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<EnumFileProviderNullableFilter>;
  storageId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type FileWhereUniqueInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<EnumFileProviderNullableFilter>;
  storageId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  accessToken: Scalars['String']['output'];
  expireTime: Scalars['DateTime']['output'];
  profile?: Maybe<UserOnly>;
  refreshToken: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneUser: User;
  deleteOneUser: User;
  login: LoginResult;
  loginWithIdToken: LoginResult;
  refreshToken: RefreshTokenResult;
  register: UserOnly;
  updateOneUser: User;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginWithIdTokenArgs = {
  idToken: Scalars['String']['input'];
  provider?: InputMaybe<SignInProvider>;
  role?: InputMaybe<UserRole>;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRoleWithoutSupperAdmin>;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumFileProviderNullableFilter = {
  equals?: InputMaybe<FileProvider>;
  in?: InputMaybe<Array<FileProvider>>;
  not?: InputMaybe<NestedEnumFileProviderNullableFilter>;
  notIn?: InputMaybe<Array<FileProvider>>;
};

export type NestedEnumSignInProviderNullableFilter = {
  equals?: InputMaybe<SignInProvider>;
  in?: InputMaybe<Array<SignInProvider>>;
  not?: InputMaybe<NestedEnumSignInProviderNullableFilter>;
  notIn?: InputMaybe<Array<SignInProvider>>;
};

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedEnumUserStatusFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableEnumFileProviderFieldUpdateOperationsInput = {
  set?: InputMaybe<FileProvider>;
};

export type NullableEnumSignInProviderFieldUpdateOperationsInput = {
  set?: InputMaybe<SignInProvider>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  findFirstUser: User;
  findManyUser: Array<User>;
  getUploadUrl: Scalars['String']['output'];
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetUploadUrlArgs = {
  name: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshTokenResult = {
  __typename?: 'RefreshTokenResult';
  accessToken: Scalars['String']['output'];
  expireTime: Scalars['DateTime']['output'];
};

export enum SignInProvider {
  Google = 'google'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<File>;
  avatarId?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  signInProvider?: Maybe<SignInProvider>;
  status: UserStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  avatarId: Scalars['Int']['output'];
  avatarUrl: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  phoneNumber: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  signInProvider: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCreateInput = {
  avatar?: InputMaybe<FileCreateNestedOneWithoutUsersInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  signInProvider?: InputMaybe<SignInProvider>;
  status?: InputMaybe<UserStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatarId?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  signInProvider?: Maybe<SignInProvider>;
  status?: Maybe<UserStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatarId?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  signInProvider?: Maybe<SignInProvider>;
  status?: Maybe<UserStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserOnly = {
  __typename?: 'UserOnly';
  avatar?: Maybe<File>;
  avatarId?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  signInProvider?: Maybe<SignInProvider>;
  status: UserStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  avatar?: InputMaybe<FileOrderByWithRelationInput>;
  avatarId?: InputMaybe<SortOrderInput>;
  avatarUrl?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  signInProvider?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserRole {
  Admin = 'admin',
  Staff = 'staff',
  SupperAdmin = 'supper_admin',
  User = 'user'
}

export enum UserRoleWithoutSupperAdmin {
  Admin = 'admin',
  Staff = 'staff',
  User = 'user'
}

export enum UserScalarFieldEnum {
  AvatarId = 'avatarId',
  AvatarUrl = 'avatarUrl',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
  Role = 'role',
  SignInProvider = 'signInProvider',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum UserStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type UserUpdateInput = {
  avatar?: InputMaybe<FileUpdateOneWithoutUsersNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  signInProvider?: InputMaybe<NullableEnumSignInProviderFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<FileNullableRelationFilter>;
  avatarId?: InputMaybe<StringNullableFilter>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<BoolFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  signInProvider?: InputMaybe<EnumSignInProviderNullableFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<FileNullableRelationFilter>;
  avatarId?: InputMaybe<StringNullableFilter>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<BoolFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  signInProvider?: InputMaybe<EnumSignInProviderNullableFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FindManyUserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>;
}>;


export type FindManyUserQuery = { __typename?: 'Query', findManyUser: Array<{ __typename?: 'User', id: string }> };


export const FindManyUserDocument = gql`
    query findManyUser($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int, $distinct: [UserScalarFieldEnum!]) {
  findManyUser(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    id
  }
}
    `;

/**
 * __useFindManyUserQuery__
 *
 * To run a query within a React component, call `useFindManyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useFindManyUserQuery(baseOptions?: Apollo.QueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, options);
      }
export function useFindManyUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, options);
        }
export function useFindManyUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, options);
        }
export type FindManyUserQueryHookResult = ReturnType<typeof useFindManyUserQuery>;
export type FindManyUserLazyQueryHookResult = ReturnType<typeof useFindManyUserLazyQuery>;
export type FindManyUserSuspenseQueryHookResult = ReturnType<typeof useFindManyUserSuspenseQuery>;
export type FindManyUserQueryResult = Apollo.QueryResult<FindManyUserQuery, FindManyUserQueryVariables>;