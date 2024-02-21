import { User } from '@api/@generated';
import { ObjectType, OmitType } from '@nestjs/graphql';

@ObjectType()
export class UserOnly extends OmitType(User, ['password']) {}
