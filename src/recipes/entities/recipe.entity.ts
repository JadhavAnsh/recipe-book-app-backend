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

  @Field({ nullable: true })
  categoryId?: string;

  @Field(() => Number)
  prepTime: number;

  @Field(() => Number)
  cookTime: number;

  @Field(() => Number)
  servings: number;

  @Field(() => String, { nullable: true })
  image?: string | null;
}
