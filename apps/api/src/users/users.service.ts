import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOneById(id: string) {
    return { id };
  }
}
