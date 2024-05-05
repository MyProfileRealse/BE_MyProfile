import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/entities/post.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async getAllPost(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
}
