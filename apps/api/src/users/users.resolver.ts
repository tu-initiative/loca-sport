import { User } from '@api/users/users.model';
import { UsersService } from '@api/users/users.service';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User, { name: 'user' })
  async getUser(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOneById(id);
  }
}
