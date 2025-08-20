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

  @Field(() => String, { nullable: true })
  image?: string;
}
