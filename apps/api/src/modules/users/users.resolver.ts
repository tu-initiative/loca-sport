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

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User, { name: 'create_user' })
  createOneUser(@Args() args: CreateOneUserArgs) {
    return this.usersService.create(args);
  }

  @Mutation(() => User, { name: 'update_user' })
  updateOneUser(@Args() args: UpdateOneUserArgs) {
    return this.usersService.update(args);
  }

  @Mutation(() => User, { name: 'delete_user' })
  deleteOneUser(@Args() args: DeleteOneUserArgs) {
    return this.usersService.delete(args);
  }

  @Query(() => [User], { name: 'all_user' })
  findManyUser(@Args() args: FindManyUserArgs) {
    return this.usersService.findMany(args);
  }

  @Query(() => User, { name: 'one_user' })
  findFirstUser(@Args() args: FindFirstUserArgs) {
    return this.usersService.findFirst(args);
  }
}
