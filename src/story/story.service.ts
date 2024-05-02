import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Story } from 'src/entities/story.schema';

@Injectable()
export class StoryService {
  constructor(@InjectModel(Story.name) private storyModel: Model<Story>) {}

  async getAllStory(): Promise<Story[]> {
    return this.storyModel.find().exec();
  }
}
