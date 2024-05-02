import { Controller, Get } from '@nestjs/common';
import { StoryService } from './story.service';
import { Story } from 'src/entities/story.schema';

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get('/getStories')
  getAllStories(): Promise<Story[]> {
    return this.storyService.getAllStory();
  }
}
