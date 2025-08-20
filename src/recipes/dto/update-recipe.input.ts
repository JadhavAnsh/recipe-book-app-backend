import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateRecipeInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field(() => [String], { nullable: true })
  ingredients?: string[];

  @Field(() => [String], { nullable: true })
  steps?: string[];

  @Field({ nullable: true })
  category?: string;

  @Field(() => String, { nullable: true })
  image?: string | null;
}
