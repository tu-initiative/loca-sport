import { UsersResolver } from '@api/users/users.resolver';
import { UsersService } from '@api/users/users.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
