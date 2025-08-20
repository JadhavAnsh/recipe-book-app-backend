import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => [String])
  ingredients: string[];

  @Field(() => [String])
  steps: string[];

  @Field()
  category: string;

  @Field(() => String, { nullable: true })
  image?: string | null;
}
