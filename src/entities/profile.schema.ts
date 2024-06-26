import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  avatar: string;

  @Prop()
  introduce: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
