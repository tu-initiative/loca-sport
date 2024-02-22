import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import {
  CreateOneUserArgs,
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  UpdateOneUserArgs,
  User,
} from '@api/@generated';
import { AuthRoles } from '../auth/passport/jwt/jwt.decorator';
import { UserRole } from '@prisma/client';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createOneUser(@Args() args: CreateOneUserArgs) {
    return this.usersService.create(args);
  }

  @Mutation(() => User)
  updateOneUser(@Args() args: UpdateOneUserArgs) {
    return this.usersService.update(args);
  }

  @Mutation(() => User)
  deleteOneUser(@Args() args: DeleteOneUserArgs) {
    return this.usersService.delete(args);
  }

  @Query(() => [User])
  @AuthRoles()
  findManyUser(@Args() args: FindManyUserArgs) {
    return this.usersService.findMany(args);
  }

  @Query(() => User)
  findFirstUser(@Args() args: FindFirstUserArgs) {
    return this.usersService.findFirst(args);
  }
}
