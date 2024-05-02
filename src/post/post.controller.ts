import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from 'src/entities/post.schema';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/getPosts')
  getAllPost(): Promise<Post[]> {
    return this.postService.getAllPost();
  }
}
