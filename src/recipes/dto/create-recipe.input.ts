import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
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

  @Field(() => Number, { defaultValue: 0 })
  prepTime: number;

  @Field(() => Number, { defaultValue: 0 })
  cookTime: number;

  @Field(() => Number, { defaultValue: 1 })
  servings: number;

  @Field(() => String, { nullable: true })
  image?: string;
}
