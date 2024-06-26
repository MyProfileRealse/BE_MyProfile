import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WorkDocument = HydratedDocument<Work>;

@Schema()
export class Work {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Date })
  startTime: Date;

  @Prop({ type: Date })
  endTime: string;
}

export const WorkSchema = SchemaFactory.createForClass(Work);
