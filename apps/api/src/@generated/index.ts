import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  avatarId = 'avatarId',
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  emailVerified = 'emailVerified',
  password = 'password',
  phoneNumber = 'phoneNumber',
  status = 'status',
  role = 'role',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  deletedAt = 'deletedAt',
}

export enum UserStatus {
  active = 'active',
  inactive = 'inactive',
}

export enum UserRole {
  owner = 'owner',
  hunter = 'hunter',
  admin = 'admin',
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

export enum NullsOrder {
  first = 'first',
  last = 'last',
}

export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
}

export enum JsonNullValueFilter {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
  AnyNull = 'AnyNull',
}

export enum FileProvider {
  s3 = 's3',
  cloudinary = 'cloudinary',
}

export enum FileScalarFieldEnum {
  id = 'id',
  url = 'url',
  storageId = 'storageId',
  provider = 'provider',
  metadata = 'metadata',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  deletedAt = 'deletedAt',
}

registerEnumType(FileScalarFieldEnum, {
  name: 'FileScalarFieldEnum',
  description: undefined,
});
registerEnumType(FileProvider, {
  name: 'FileProvider',
  description: undefined,
});
registerEnumType(JsonNullValueFilter, {
  name: 'JsonNullValueFilter',
  description: undefined,
});
registerEnumType(NullableJsonNullValueInput, {
  name: 'NullableJsonNullValueInput',
  description: undefined,
});
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined });
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, {
  name: 'TransactionIsolationLevel',
  description: undefined,
});
registerEnumType(UserRole, { name: 'UserRole', description: undefined });
registerEnumType(UserStatus, { name: 'UserStatus', description: undefined });
registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});

@ObjectType()
export class AggregateFile {
  @Field(() => FileCountAggregate, { nullable: true })
  _count?: InstanceType<typeof FileCountAggregate>;
  @Field(() => FileMinAggregate, { nullable: true })
  _min?: InstanceType<typeof FileMinAggregate>;
  @Field(() => FileMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof FileMaxAggregate>;
}

@ArgsType()
export class CreateManyFileArgs {
  @Field(() => [FileCreateManyInput], { nullable: false })
  @Type(() => FileCreateManyInput)
  data!: Array<FileCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneFileArgs {
  @Field(() => FileCreateInput, { nullable: false })
  @Type(() => FileCreateInput)
  data!: InstanceType<typeof FileCreateInput>;
}

@ArgsType()
export class DeleteManyFileArgs {
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
}

@ArgsType()
export class DeleteOneFileArgs {
  @Field(() => FileWhereUniqueInput, { nullable: false })
  @Type(() => FileWhereUniqueInput)
  where!: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
}

@ArgsType()
export class FileAggregateArgs {
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
  @Field(() => [FileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileOrderByWithRelationInput>;
  @Field(() => FileWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => FileCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FileCountAggregateInput>;
  @Field(() => FileMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FileMinAggregateInput>;
  @Field(() => FileMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FileMaxAggregateInput>;
}

@InputType()
export class FileCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  url?: true;
  @Field(() => Boolean, { nullable: true })
  storageId?: true;
  @Field(() => Boolean, { nullable: true })
  provider?: true;
  @Field(() => Boolean, { nullable: true })
  metadata?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  deletedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class FileCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  url!: number;
  @Field(() => Int, { nullable: false })
  storageId!: number;
  @Field(() => Int, { nullable: false })
  provider!: number;
  @Field(() => Int, { nullable: false })
  metadata!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  deletedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class FileCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  storageId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  metadata?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  deletedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class FileCount {
  @Field(() => Int, { nullable: false })
  users?: number;
}

@InputType()
export class FileCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  url!: string;
  @Field(() => String, { nullable: false })
  storageId!: string;
  @Field(() => FileProvider, { nullable: true })
  provider?: keyof typeof FileProvider;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class FileCreateNestedOneWithoutUsersInput {
  @Field(() => FileCreateWithoutUsersInput, { nullable: true })
  @Type(() => FileCreateWithoutUsersInput)
  create?: InstanceType<typeof FileCreateWithoutUsersInput>;
  @Field(() => FileCreateOrConnectWithoutUsersInput, { nullable: true })
  @Type(() => FileCreateOrConnectWithoutUsersInput)
  connectOrCreate?: InstanceType<typeof FileCreateOrConnectWithoutUsersInput>;
  @Field(() => FileWhereUniqueInput, { nullable: true })
  @Type(() => FileWhereUniqueInput)
  connect?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
}

@InputType()
export class FileCreateOrConnectWithoutUsersInput {
  @Field(() => FileWhereUniqueInput, { nullable: false })
  @Type(() => FileWhereUniqueInput)
  where!: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
  @Field(() => FileCreateWithoutUsersInput, { nullable: false })
  @Type(() => FileCreateWithoutUsersInput)
  create!: InstanceType<typeof FileCreateWithoutUsersInput>;
}

@InputType()
export class FileCreateWithoutUsersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  url!: string;
  @Field(() => String, { nullable: false })
  storageId!: string;
  @Field(() => FileProvider, { nullable: true })
  provider?: keyof typeof FileProvider;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class FileCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  url!: string;
  @Field(() => String, { nullable: false })
  storageId!: string;
  @Field(() => FileProvider, { nullable: true })
  provider?: keyof typeof FileProvider;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
  @Field(() => UserCreateNestedManyWithoutAvatarInput, { nullable: true })
  users?: InstanceType<typeof UserCreateNestedManyWithoutAvatarInput>;
}

@ArgsType()
export class FileGroupByArgs {
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
  @Field(() => [FileOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<FileOrderByWithAggregationInput>;
  @Field(() => [FileScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof FileScalarFieldEnum>;
  @Field(() => FileScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof FileScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => FileCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FileCountAggregateInput>;
  @Field(() => FileMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FileMinAggregateInput>;
  @Field(() => FileMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FileMaxAggregateInput>;
}

@ObjectType()
export class FileGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  url!: string;
  @Field(() => String, { nullable: false })
  storageId!: string;
  @Field(() => FileProvider, { nullable: true })
  provider?: keyof typeof FileProvider;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
  @Field(() => FileCountAggregate, { nullable: true })
  _count?: InstanceType<typeof FileCountAggregate>;
  @Field(() => FileMinAggregate, { nullable: true })
  _min?: InstanceType<typeof FileMinAggregate>;
  @Field(() => FileMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof FileMaxAggregate>;
}

@InputType()
export class FileMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  url?: true;
  @Field(() => Boolean, { nullable: true })
  storageId?: true;
  @Field(() => Boolean, { nullable: true })
  provider?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  deletedAt?: true;
}

@ObjectType()
export class FileMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  url?: string;
  @Field(() => String, { nullable: true })
  storageId?: string;
  @Field(() => FileProvider, { nullable: true })
  provider?: keyof typeof FileProvider;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class FileMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  storageId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  deletedAt?: keyof typeof SortOrder;
}

@InputType()
export class FileMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  url?: true;
  @Field(() => Boolean, { nullable: true })
  storageId?: true;
  @Field(() => Boolean, { nullable: true })
  provider?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  deletedAt?: true;
}

@ObjectType()
export class FileMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  url?: string;
  @Field(() => String, { nullable: true })
  storageId?: string;
  @Field(() => FileProvider, { nullable: true })
  provider?: keyof typeof FileProvider;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class FileMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  storageId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  deletedAt?: keyof typeof SortOrder;
}

@InputType()
export class FileNullableRelationFilter {
  @Field(() => FileWhereInput, { nullable: true })
  is?: InstanceType<typeof FileWhereInput>;
  @Field(() => FileWhereInput, { nullable: true })
  isNot?: InstanceType<typeof FileWhereInput>;
}

@InputType()
export class FileOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  storageId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  provider?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  metadata?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  deletedAt?: InstanceType<typeof SortOrderInput>;
  @Field(() => FileCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FileCountOrderByAggregateInput>;
  @Field(() => FileMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FileMaxOrderByAggregateInput>;
  @Field(() => FileMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FileMinOrderByAggregateInput>;
}

@InputType()
export class FileOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  storageId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  provider?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  metadata?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  deletedAt?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  users?: InstanceType<typeof UserOrderByRelationAggregateInput>;
}

@InputType()
export class FileScalarWhereWithAggregatesInput {
  @Field(() => [FileScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<FileScalarWhereWithAggregatesInput>;
  @Field(() => [FileScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<FileScalarWhereWithAggregatesInput>;
  @Field(() => [FileScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<FileScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  url?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  storageId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => EnumFileProviderNullableWithAggregatesFilter, { nullable: true })
  provider?: InstanceType<typeof EnumFileProviderNullableWithAggregatesFilter>;
  @Field(() => JsonNullableWithAggregatesFilter, { nullable: true })
  metadata?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}

@InputType()
export class FileUncheckedCreateWithoutUsersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  url!: string;
  @Field(() => String, { nullable: false })
  storageId!: string;
  @Field(() => FileProvider, { nullable: true })
  provider?: keyof typeof FileProvider;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class FileUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  url!: string;
  @Field(() => String, { nullable: false })
  storageId!: string;
  @Field(() => FileProvider, { nullable: true })
  provider?: keyof typeof FileProvider;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
  @Field(() => UserUncheckedCreateNestedManyWithoutAvatarInput, {
    nullable: true,
  })
  users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutAvatarInput>;
}

@InputType()
export class FileUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  storageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableEnumFileProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: InstanceType<
    typeof NullableEnumFileProviderFieldUpdateOperationsInput
  >;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUncheckedUpdateWithoutUsersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  storageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableEnumFileProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: InstanceType<
    typeof NullableEnumFileProviderFieldUpdateOperationsInput
  >;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  storageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableEnumFileProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: InstanceType<
    typeof NullableEnumFileProviderFieldUpdateOperationsInput
  >;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => UserUncheckedUpdateManyWithoutAvatarNestedInput, {
    nullable: true,
  })
  users?: InstanceType<typeof UserUncheckedUpdateManyWithoutAvatarNestedInput>;
}

@InputType()
export class FileUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  storageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableEnumFileProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: InstanceType<
    typeof NullableEnumFileProviderFieldUpdateOperationsInput
  >;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUpdateOneWithoutUsersNestedInput {
  @Field(() => FileCreateWithoutUsersInput, { nullable: true })
  @Type(() => FileCreateWithoutUsersInput)
  create?: InstanceType<typeof FileCreateWithoutUsersInput>;
  @Field(() => FileCreateOrConnectWithoutUsersInput, { nullable: true })
  @Type(() => FileCreateOrConnectWithoutUsersInput)
  connectOrCreate?: InstanceType<typeof FileCreateOrConnectWithoutUsersInput>;
  @Field(() => FileUpsertWithoutUsersInput, { nullable: true })
  @Type(() => FileUpsertWithoutUsersInput)
  upsert?: InstanceType<typeof FileUpsertWithoutUsersInput>;
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  disconnect?: InstanceType<typeof FileWhereInput>;
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  delete?: InstanceType<typeof FileWhereInput>;
  @Field(() => FileWhereUniqueInput, { nullable: true })
  @Type(() => FileWhereUniqueInput)
  connect?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
  @Field(() => FileUpdateToOneWithWhereWithoutUsersInput, { nullable: true })
  @Type(() => FileUpdateToOneWithWhereWithoutUsersInput)
  update?: InstanceType<typeof FileUpdateToOneWithWhereWithoutUsersInput>;
}

@InputType()
export class FileUpdateToOneWithWhereWithoutUsersInput {
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
  @Field(() => FileUpdateWithoutUsersInput, { nullable: false })
  @Type(() => FileUpdateWithoutUsersInput)
  data!: InstanceType<typeof FileUpdateWithoutUsersInput>;
}

@InputType()
export class FileUpdateWithoutUsersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  storageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableEnumFileProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: InstanceType<
    typeof NullableEnumFileProviderFieldUpdateOperationsInput
  >;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  storageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableEnumFileProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: InstanceType<
    typeof NullableEnumFileProviderFieldUpdateOperationsInput
  >;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => UserUpdateManyWithoutAvatarNestedInput, { nullable: true })
  users?: InstanceType<typeof UserUpdateManyWithoutAvatarNestedInput>;
}

@InputType()
export class FileUpsertWithoutUsersInput {
  @Field(() => FileUpdateWithoutUsersInput, { nullable: false })
  @Type(() => FileUpdateWithoutUsersInput)
  update!: InstanceType<typeof FileUpdateWithoutUsersInput>;
  @Field(() => FileCreateWithoutUsersInput, { nullable: false })
  @Type(() => FileCreateWithoutUsersInput)
  create!: InstanceType<typeof FileCreateWithoutUsersInput>;
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
}

@InputType()
export class FileWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  storageId?: string;
  @Field(() => [FileWhereInput], { nullable: true })
  AND?: Array<FileWhereInput>;
  @Field(() => [FileWhereInput], { nullable: true })
  OR?: Array<FileWhereInput>;
  @Field(() => [FileWhereInput], { nullable: true })
  NOT?: Array<FileWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  url?: InstanceType<typeof StringFilter>;
  @Field(() => EnumFileProviderNullableFilter, { nullable: true })
  provider?: InstanceType<typeof EnumFileProviderNullableFilter>;
  @Field(() => JsonNullableFilter, { nullable: true })
  metadata?: InstanceType<typeof JsonNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => UserListRelationFilter, { nullable: true })
  users?: InstanceType<typeof UserListRelationFilter>;
}

@InputType()
export class FileWhereInput {
  @Field(() => [FileWhereInput], { nullable: true })
  AND?: Array<FileWhereInput>;
  @Field(() => [FileWhereInput], { nullable: true })
  OR?: Array<FileWhereInput>;
  @Field(() => [FileWhereInput], { nullable: true })
  NOT?: Array<FileWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  url?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  storageId?: InstanceType<typeof StringFilter>;
  @Field(() => EnumFileProviderNullableFilter, { nullable: true })
  provider?: InstanceType<typeof EnumFileProviderNullableFilter>;
  @Field(() => JsonNullableFilter, { nullable: true })
  metadata?: InstanceType<typeof JsonNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => UserListRelationFilter, { nullable: true })
  users?: InstanceType<typeof UserListRelationFilter>;
}

@ObjectType()
export class File {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  url!: string;
  @Field(() => String, { nullable: false })
  storageId!: string;
  @Field(() => FileProvider, { nullable: true, defaultValue: 'cloudinary' })
  provider!: keyof typeof FileProvider | null;
  @Field(() => GraphQLJSON, { nullable: true })
  metadata!: any | null;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => Date, { nullable: true })
  deletedAt!: Date | null;
  @Field(() => [User], { nullable: true })
  users?: Array<User>;
  @Field(() => FileCount, { nullable: false })
  _count?: InstanceType<typeof FileCount>;
}

@ArgsType()
export class FindFirstFileOrThrowArgs {
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
  @Field(() => [FileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileOrderByWithRelationInput>;
  @Field(() => FileWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FileScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FileScalarFieldEnum>;
}

@ArgsType()
export class FindFirstFileArgs {
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
  @Field(() => [FileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileOrderByWithRelationInput>;
  @Field(() => FileWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FileScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FileScalarFieldEnum>;
}

@ArgsType()
export class FindManyFileArgs {
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
  @Field(() => [FileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileOrderByWithRelationInput>;
  @Field(() => FileWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FileScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FileScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueFileOrThrowArgs {
  @Field(() => FileWhereUniqueInput, { nullable: false })
  @Type(() => FileWhereUniqueInput)
  where!: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
}

@ArgsType()
export class FindUniqueFileArgs {
  @Field(() => FileWhereUniqueInput, { nullable: false })
  @Type(() => FileWhereUniqueInput)
  where!: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
}

@ArgsType()
export class UpdateManyFileArgs {
  @Field(() => FileUpdateManyMutationInput, { nullable: false })
  @Type(() => FileUpdateManyMutationInput)
  data!: InstanceType<typeof FileUpdateManyMutationInput>;
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
}

@ArgsType()
export class UpdateOneFileArgs {
  @Field(() => FileUpdateInput, { nullable: false })
  @Type(() => FileUpdateInput)
  data!: InstanceType<typeof FileUpdateInput>;
  @Field(() => FileWhereUniqueInput, { nullable: false })
  @Type(() => FileWhereUniqueInput)
  where!: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
}

@ArgsType()
export class UpsertOneFileArgs {
  @Field(() => FileWhereUniqueInput, { nullable: false })
  @Type(() => FileWhereUniqueInput)
  where!: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'storageId'>;
  @Field(() => FileCreateInput, { nullable: false })
  @Type(() => FileCreateInput)
  create!: InstanceType<typeof FileCreateInput>;
  @Field(() => FileUpdateInput, { nullable: false })
  @Type(() => FileUpdateInput)
  update!: InstanceType<typeof FileUpdateInput>;
}

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
  @Field(() => Boolean, { nullable: true })
  set?: boolean;
}

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class DateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeNullableFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumFileProviderNullableFilter {
  @Field(() => FileProvider, { nullable: true })
  equals?: keyof typeof FileProvider;
  @Field(() => [FileProvider], { nullable: true })
  in?: Array<keyof typeof FileProvider>;
  @Field(() => [FileProvider], { nullable: true })
  notIn?: Array<keyof typeof FileProvider>;
  @Field(() => NestedEnumFileProviderNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumFileProviderNullableFilter>;
}

@InputType()
export class EnumFileProviderNullableWithAggregatesFilter {
  @Field(() => FileProvider, { nullable: true })
  equals?: keyof typeof FileProvider;
  @Field(() => [FileProvider], { nullable: true })
  in?: Array<keyof typeof FileProvider>;
  @Field(() => [FileProvider], { nullable: true })
  notIn?: Array<keyof typeof FileProvider>;
  @Field(() => NestedEnumFileProviderNullableWithAggregatesFilter, {
    nullable: true,
  })
  not?: InstanceType<typeof NestedEnumFileProviderNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedEnumFileProviderNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumFileProviderNullableFilter>;
  @Field(() => NestedEnumFileProviderNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumFileProviderNullableFilter>;
}

@InputType()
export class EnumUserRoleFieldUpdateOperationsInput {
  @Field(() => UserRole, { nullable: true })
  set?: keyof typeof UserRole;
}

@InputType()
export class EnumUserRoleFilter {
  @Field(() => UserRole, { nullable: true })
  equals?: keyof typeof UserRole;
  @Field(() => [UserRole], { nullable: true })
  in?: Array<keyof typeof UserRole>;
  @Field(() => [UserRole], { nullable: true })
  notIn?: Array<keyof typeof UserRole>;
  @Field(() => NestedEnumUserRoleFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}

@InputType()
export class EnumUserRoleWithAggregatesFilter {
  @Field(() => UserRole, { nullable: true })
  equals?: keyof typeof UserRole;
  @Field(() => [UserRole], { nullable: true })
  in?: Array<keyof typeof UserRole>;
  @Field(() => [UserRole], { nullable: true })
  notIn?: Array<keyof typeof UserRole>;
  @Field(() => NestedEnumUserRoleWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumUserRoleFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumUserRoleFilter>;
  @Field(() => NestedEnumUserRoleFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}

@InputType()
export class EnumUserStatusFieldUpdateOperationsInput {
  @Field(() => UserStatus, { nullable: true })
  set?: keyof typeof UserStatus;
}

@InputType()
export class EnumUserStatusFilter {
  @Field(() => UserStatus, { nullable: true })
  equals?: keyof typeof UserStatus;
  @Field(() => [UserStatus], { nullable: true })
  in?: Array<keyof typeof UserStatus>;
  @Field(() => [UserStatus], { nullable: true })
  notIn?: Array<keyof typeof UserStatus>;
  @Field(() => NestedEnumUserStatusFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumUserStatusFilter>;
}

@InputType()
export class EnumUserStatusWithAggregatesFilter {
  @Field(() => UserStatus, { nullable: true })
  equals?: keyof typeof UserStatus;
  @Field(() => [UserStatus], { nullable: true })
  in?: Array<keyof typeof UserStatus>;
  @Field(() => [UserStatus], { nullable: true })
  notIn?: Array<keyof typeof UserStatus>;
  @Field(() => NestedEnumUserStatusWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumUserStatusWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumUserStatusFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumUserStatusFilter>;
  @Field(() => NestedEnumUserStatusFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumUserStatusFilter>;
}

@InputType()
export class JsonNullableFilter {
  @Field(() => GraphQLJSON, { nullable: true })
  equals?: any;
  @Field(() => [String], { nullable: true })
  path?: Array<string>;
  @Field(() => String, { nullable: true })
  string_contains?: string;
  @Field(() => String, { nullable: true })
  string_starts_with?: string;
  @Field(() => String, { nullable: true })
  string_ends_with?: string;
  @Field(() => GraphQLJSON, { nullable: true })
  array_contains?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  array_starts_with?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  array_ends_with?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  lt?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  lte?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  gt?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  gte?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  not?: any;
}

@InputType()
export class JsonNullableWithAggregatesFilter {
  @Field(() => GraphQLJSON, { nullable: true })
  equals?: any;
  @Field(() => [String], { nullable: true })
  path?: Array<string>;
  @Field(() => String, { nullable: true })
  string_contains?: string;
  @Field(() => String, { nullable: true })
  string_starts_with?: string;
  @Field(() => String, { nullable: true })
  string_ends_with?: string;
  @Field(() => GraphQLJSON, { nullable: true })
  array_contains?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  array_starts_with?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  array_ends_with?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  lt?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  lte?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  gt?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  gte?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  not?: any;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedJsonNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedJsonNullableFilter>;
  @Field(() => NestedJsonNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedJsonNullableFilter>;
}

@InputType()
export class NestedBoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumFileProviderNullableFilter {
  @Field(() => FileProvider, { nullable: true })
  equals?: keyof typeof FileProvider;
  @Field(() => [FileProvider], { nullable: true })
  in?: Array<keyof typeof FileProvider>;
  @Field(() => [FileProvider], { nullable: true })
  notIn?: Array<keyof typeof FileProvider>;
  @Field(() => NestedEnumFileProviderNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumFileProviderNullableFilter>;
}

@InputType()
export class NestedEnumFileProviderNullableWithAggregatesFilter {
  @Field(() => FileProvider, { nullable: true })
  equals?: keyof typeof FileProvider;
  @Field(() => [FileProvider], { nullable: true })
  in?: Array<keyof typeof FileProvider>;
  @Field(() => [FileProvider], { nullable: true })
  notIn?: Array<keyof typeof FileProvider>;
  @Field(() => NestedEnumFileProviderNullableWithAggregatesFilter, {
    nullable: true,
  })
  not?: InstanceType<typeof NestedEnumFileProviderNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedEnumFileProviderNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumFileProviderNullableFilter>;
  @Field(() => NestedEnumFileProviderNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumFileProviderNullableFilter>;
}

@InputType()
export class NestedEnumUserRoleFilter {
  @Field(() => UserRole, { nullable: true })
  equals?: keyof typeof UserRole;
  @Field(() => [UserRole], { nullable: true })
  in?: Array<keyof typeof UserRole>;
  @Field(() => [UserRole], { nullable: true })
  notIn?: Array<keyof typeof UserRole>;
  @Field(() => NestedEnumUserRoleFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}

@InputType()
export class NestedEnumUserRoleWithAggregatesFilter {
  @Field(() => UserRole, { nullable: true })
  equals?: keyof typeof UserRole;
  @Field(() => [UserRole], { nullable: true })
  in?: Array<keyof typeof UserRole>;
  @Field(() => [UserRole], { nullable: true })
  notIn?: Array<keyof typeof UserRole>;
  @Field(() => NestedEnumUserRoleWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumUserRoleFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumUserRoleFilter>;
  @Field(() => NestedEnumUserRoleFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}

@InputType()
export class NestedEnumUserStatusFilter {
  @Field(() => UserStatus, { nullable: true })
  equals?: keyof typeof UserStatus;
  @Field(() => [UserStatus], { nullable: true })
  in?: Array<keyof typeof UserStatus>;
  @Field(() => [UserStatus], { nullable: true })
  notIn?: Array<keyof typeof UserStatus>;
  @Field(() => NestedEnumUserStatusFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumUserStatusFilter>;
}

@InputType()
export class NestedEnumUserStatusWithAggregatesFilter {
  @Field(() => UserStatus, { nullable: true })
  equals?: keyof typeof UserStatus;
  @Field(() => [UserStatus], { nullable: true })
  in?: Array<keyof typeof UserStatus>;
  @Field(() => [UserStatus], { nullable: true })
  notIn?: Array<keyof typeof UserStatus>;
  @Field(() => NestedEnumUserStatusWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumUserStatusWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumUserStatusFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumUserStatusFilter>;
  @Field(() => NestedEnumUserStatusFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumUserStatusFilter>;
}

@InputType()
export class NestedIntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedJsonNullableFilter {
  @Field(() => GraphQLJSON, { nullable: true })
  equals?: any;
  @Field(() => [String], { nullable: true })
  path?: Array<string>;
  @Field(() => String, { nullable: true })
  string_contains?: string;
  @Field(() => String, { nullable: true })
  string_starts_with?: string;
  @Field(() => String, { nullable: true })
  string_ends_with?: string;
  @Field(() => GraphQLJSON, { nullable: true })
  array_contains?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  array_starts_with?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  array_ends_with?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  lt?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  lte?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  gt?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  gte?: any;
  @Field(() => GraphQLJSON, { nullable: true })
  not?: any;
}

@InputType()
export class NestedStringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class NullableEnumFileProviderFieldUpdateOperationsInput {
  @Field(() => FileProvider, { nullable: true })
  set?: keyof typeof FileProvider;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class SortOrderInput {
  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;
  @Field(() => NullsOrder, { nullable: true })
  nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateUser {
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
  @Field(() => [UserCreateManyInput], { nullable: false })
  @Type(() => UserCreateManyInput)
  data!: Array<UserCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindUniqueUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpdateManyUserArgs {
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  data!: InstanceType<typeof UserUpdateInput>;
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  create!: InstanceType<typeof UserCreateInput>;
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  avatarId?: true;
  @Field(() => Boolean, { nullable: true })
  firstName?: true;
  @Field(() => Boolean, { nullable: true })
  lastName?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  deletedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  avatarId!: number;
  @Field(() => Int, { nullable: false })
  firstName!: number;
  @Field(() => Int, { nullable: false })
  lastName!: number;
  @Field(() => Int, { nullable: false })
  email!: number;
  @Field(() => Int, { nullable: false })
  emailVerified!: number;
  @Field(() => Int, { nullable: false })
  password!: number;
  @Field(() => Int, { nullable: false })
  phoneNumber!: number;
  @Field(() => Int, { nullable: false })
  status!: number;
  @Field(() => Int, { nullable: false })
  role!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  deletedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  avatarId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  deletedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyAvatarInputEnvelope {
  @Field(() => [UserCreateManyAvatarInput], { nullable: false })
  @Type(() => UserCreateManyAvatarInput)
  data!: Array<UserCreateManyAvatarInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class UserCreateManyAvatarInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  firstName!: string;
  @Field(() => String, { nullable: false })
  lastName!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: boolean;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: true })
  role?: keyof typeof UserRole;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class UserCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  avatarId?: string;
  @Field(() => String, { nullable: false })
  firstName!: string;
  @Field(() => String, { nullable: false })
  lastName!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: boolean;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: true })
  role?: keyof typeof UserRole;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class UserCreateNestedManyWithoutAvatarInput {
  @Field(() => [UserCreateWithoutAvatarInput], { nullable: true })
  @Type(() => UserCreateWithoutAvatarInput)
  create?: Array<UserCreateWithoutAvatarInput>;
  @Field(() => [UserCreateOrConnectWithoutAvatarInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAvatarInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutAvatarInput>;
  @Field(() => UserCreateManyAvatarInputEnvelope, { nullable: true })
  @Type(() => UserCreateManyAvatarInputEnvelope)
  createMany?: InstanceType<typeof UserCreateManyAvatarInputEnvelope>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}

@InputType()
export class UserCreateOrConnectWithoutAvatarInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Field(() => UserCreateWithoutAvatarInput, { nullable: false })
  @Type(() => UserCreateWithoutAvatarInput)
  create!: InstanceType<typeof UserCreateWithoutAvatarInput>;
}

@InputType()
export class UserCreateWithoutAvatarInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  firstName!: string;
  @Field(() => String, { nullable: false })
  lastName!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: boolean;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: true })
  role?: keyof typeof UserRole;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  firstName!: string;
  @Field(() => String, { nullable: false })
  lastName!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: boolean;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: true })
  role?: keyof typeof UserRole;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
  @Field(() => FileCreateNestedOneWithoutUsersInput, { nullable: true })
  avatar?: InstanceType<typeof FileCreateNestedOneWithoutUsersInput>;
}

@ArgsType()
export class UserGroupByArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithAggregationInput>;
  @Field(() => [UserScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserScalarFieldEnum>;
  @Field(() => UserScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: true })
  avatarId?: string;
  @Field(() => String, { nullable: false })
  firstName!: string;
  @Field(() => String, { nullable: false })
  lastName!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Boolean, { nullable: false })
  emailVerified!: boolean;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => UserStatus, { nullable: false })
  status!: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: false })
  role!: keyof typeof UserRole;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  every?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  some?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  none?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  avatarId?: true;
  @Field(() => Boolean, { nullable: true })
  firstName?: true;
  @Field(() => Boolean, { nullable: true })
  lastName?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  deletedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  avatarId?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: boolean;
  @Field(() => String, { nullable: true })
  password?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: true })
  role?: keyof typeof UserRole;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  avatarId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  deletedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  avatarId?: true;
  @Field(() => Boolean, { nullable: true })
  firstName?: true;
  @Field(() => Boolean, { nullable: true })
  lastName?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  deletedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  avatarId?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: boolean;
  @Field(() => String, { nullable: true })
  password?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: true })
  role?: keyof typeof UserRole;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  avatarId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  deletedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  avatarId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  deletedAt?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  avatarId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  deletedAt?: InstanceType<typeof SortOrderInput>;
  @Field(() => FileOrderByWithRelationInput, { nullable: true })
  avatar?: InstanceType<typeof FileOrderByWithRelationInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  avatarId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  firstName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  lastName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  emailVerified?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => EnumUserStatusWithAggregatesFilter, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusWithAggregatesFilter>;
  @Field(() => EnumUserRoleWithAggregatesFilter, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}

@InputType()
export class UserScalarWhereInput {
  @Field(() => [UserScalarWhereInput], { nullable: true })
  AND?: Array<UserScalarWhereInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  OR?: Array<UserScalarWhereInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  NOT?: Array<UserScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  avatarId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  firstName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  lastName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFilter>;
  @Field(() => EnumUserStatusFilter, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFilter>;
  @Field(() => EnumUserRoleFilter, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutAvatarInput {
  @Field(() => [UserCreateWithoutAvatarInput], { nullable: true })
  @Type(() => UserCreateWithoutAvatarInput)
  create?: Array<UserCreateWithoutAvatarInput>;
  @Field(() => [UserCreateOrConnectWithoutAvatarInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAvatarInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutAvatarInput>;
  @Field(() => UserCreateManyAvatarInputEnvelope, { nullable: true })
  @Type(() => UserCreateManyAvatarInputEnvelope)
  createMany?: InstanceType<typeof UserCreateManyAvatarInputEnvelope>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}

@InputType()
export class UserUncheckedCreateWithoutAvatarInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  firstName!: string;
  @Field(() => String, { nullable: false })
  lastName!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: boolean;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: true })
  role?: keyof typeof UserRole;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  avatarId?: string;
  @Field(() => String, { nullable: false })
  firstName!: string;
  @Field(() => String, { nullable: false })
  lastName!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: boolean;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: true })
  role?: keyof typeof UserRole;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyWithoutAvatarNestedInput {
  @Field(() => [UserCreateWithoutAvatarInput], { nullable: true })
  @Type(() => UserCreateWithoutAvatarInput)
  create?: Array<UserCreateWithoutAvatarInput>;
  @Field(() => [UserCreateOrConnectWithoutAvatarInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAvatarInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutAvatarInput>;
  @Field(() => [UserUpsertWithWhereUniqueWithoutAvatarInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutAvatarInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutAvatarInput>;
  @Field(() => UserCreateManyAvatarInputEnvelope, { nullable: true })
  @Type(() => UserCreateManyAvatarInputEnvelope)
  createMany?: InstanceType<typeof UserCreateManyAvatarInputEnvelope>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
  @Field(() => [UserUpdateWithWhereUniqueWithoutAvatarInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutAvatarInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutAvatarInput>;
  @Field(() => [UserUpdateManyWithWhereWithoutAvatarInput], { nullable: true })
  @Type(() => UserUpdateManyWithWhereWithoutAvatarInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutAvatarInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutAvatarInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumUserStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
  @Field(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumUserStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
  @Field(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutAvatarInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumUserStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
  @Field(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumUserStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
  @Field(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumUserStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
  @Field(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutAvatarInput {
  @Field(() => UserScalarWhereInput, { nullable: false })
  @Type(() => UserScalarWhereInput)
  where!: InstanceType<typeof UserScalarWhereInput>;
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithoutAvatarNestedInput {
  @Field(() => [UserCreateWithoutAvatarInput], { nullable: true })
  @Type(() => UserCreateWithoutAvatarInput)
  create?: Array<UserCreateWithoutAvatarInput>;
  @Field(() => [UserCreateOrConnectWithoutAvatarInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAvatarInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutAvatarInput>;
  @Field(() => [UserUpsertWithWhereUniqueWithoutAvatarInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutAvatarInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutAvatarInput>;
  @Field(() => UserCreateManyAvatarInputEnvelope, { nullable: true })
  @Type(() => UserCreateManyAvatarInputEnvelope)
  createMany?: InstanceType<typeof UserCreateManyAvatarInputEnvelope>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
  @Field(() => [UserUpdateWithWhereUniqueWithoutAvatarInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutAvatarInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutAvatarInput>;
  @Field(() => [UserUpdateManyWithWhereWithoutAvatarInput], { nullable: true })
  @Type(() => UserUpdateManyWithWhereWithoutAvatarInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutAvatarInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutAvatarInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Field(() => UserUpdateWithoutAvatarInput, { nullable: false })
  @Type(() => UserUpdateWithoutAvatarInput)
  data!: InstanceType<typeof UserUpdateWithoutAvatarInput>;
}

@InputType()
export class UserUpdateWithoutAvatarInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumUserStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
  @Field(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumUserStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
  @Field(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => FileUpdateOneWithoutUsersNestedInput, { nullable: true })
  avatar?: InstanceType<typeof FileUpdateOneWithoutUsersNestedInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutAvatarInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Field(() => UserUpdateWithoutAvatarInput, { nullable: false })
  @Type(() => UserUpdateWithoutAvatarInput)
  update!: InstanceType<typeof UserUpdateWithoutAvatarInput>;
  @Field(() => UserCreateWithoutAvatarInput, { nullable: false })
  @Type(() => UserCreateWithoutAvatarInput)
  create!: InstanceType<typeof UserCreateWithoutAvatarInput>;
}

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringNullableFilter, { nullable: true })
  avatarId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  firstName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  lastName?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFilter>;
  @Field(() => EnumUserStatusFilter, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFilter>;
  @Field(() => EnumUserRoleFilter, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => FileNullableRelationFilter, { nullable: true })
  avatar?: InstanceType<typeof FileNullableRelationFilter>;
}

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  avatarId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  firstName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  lastName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  emailVerified?: InstanceType<typeof BoolFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFilter>;
  @Field(() => EnumUserStatusFilter, { nullable: true })
  status?: InstanceType<typeof EnumUserStatusFilter>;
  @Field(() => EnumUserRoleFilter, { nullable: true })
  role?: InstanceType<typeof EnumUserRoleFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => FileNullableRelationFilter, { nullable: true })
  avatar?: InstanceType<typeof FileNullableRelationFilter>;
}

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: true })
  avatarId!: string | null;
  @Field(() => String, { nullable: false })
  firstName!: string;
  @Field(() => String, { nullable: false })
  lastName!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Boolean, { nullable: false, defaultValue: false })
  emailVerified!: boolean;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => UserStatus, { nullable: false, defaultValue: 'active' })
  status!: keyof typeof UserStatus;
  @Field(() => UserRole, { nullable: false, defaultValue: 'owner' })
  role!: keyof typeof UserRole;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => Date, { nullable: true })
  deletedAt!: Date | null;
  @Field(() => File, { nullable: true })
  avatar?: InstanceType<typeof File> | null;
}
