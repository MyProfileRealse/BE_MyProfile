import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Work } from 'src/entities/work.schema';

@Injectable()
export class WorkService {
  constructor(@InjectModel(Work.name) private workModel: Model<Work>) {}

  async getAllWork(): Promise<Work[]> {
    return this.workModel.find().exec();
  }
}
