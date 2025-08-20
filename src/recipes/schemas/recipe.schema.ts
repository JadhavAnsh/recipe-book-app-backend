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

  @Prop({ type: String, required: false, default: null })
  image?: string | null;
}

export type RecipeDocument = HydratedDocument<Recipes>;
export const RecipeSchema = SchemaFactory.createForClass(Recipes);


