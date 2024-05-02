import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StoryDocument = HydratedDocument<Story>;

@Schema()
export class Story {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;
}

export const StorySchema = SchemaFactory.createForClass(Story);
