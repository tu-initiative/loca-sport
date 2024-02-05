import { ObjectType, ID, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;
}
