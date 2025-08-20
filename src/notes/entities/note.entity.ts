import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Note {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  recipeId: string;

  @Field()
  text: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;
}
