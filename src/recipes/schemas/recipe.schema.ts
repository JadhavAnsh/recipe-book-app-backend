import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Recipes {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [String], default: [] })
  ingredients: string[];

  @Prop({ type: [String], default: [] })
  steps: string[];

  @Prop({ required: true })
  category: string;

  @Prop({ required: false })
  categoryId?: string;

  @Prop({ type: Number, default: 0 })
  prepTime: number;

  @Prop({ type: Number, default: 0 })
  cookTime: number;

  @Prop({ type: Number, default: 1 })
  servings: number;

  @Prop({ type: String, required: false, default: null })
  image?: string | null;
}

export type RecipeDocument = HydratedDocument<Recipes>;
export const RecipeSchema = SchemaFactory.createForClass(Recipes);


