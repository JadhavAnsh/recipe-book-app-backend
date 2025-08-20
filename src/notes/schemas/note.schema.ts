import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Notes {
  @Prop({ type: Types.ObjectId, required: true, ref: 'RecipeMongo' })
  recipeId: Types.ObjectId;

  @Prop({ type: String, required: true })
  text: string;
}

export type NoteDocument = HydratedDocument<Notes>;
export const NoteSchema = SchemaFactory.createForClass(Notes);


