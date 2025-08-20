import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Users {
  @Prop({ type: String, required: true, unique: true })
  uid: string;

  @Prop({ type: String, required: false })
  email?: string;

  @Prop({ type: String, required: false })
  displayName?: string;
}

export type UserDocument = HydratedDocument<Users>;
export const UserSchema = SchemaFactory.createForClass(Users);


