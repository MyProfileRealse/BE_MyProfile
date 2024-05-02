import { Module } from '@nestjs/common';
import { WorkController } from './work.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkSchema } from 'src/entities/work.schema';
import { WorkService } from './work.service';

@Module({
  controllers: [WorkController],
  imports: [MongooseModule.forFeature([{ name: 'Work', schema: WorkSchema }])],
  providers: [WorkService],
})
export class WorkModule {}
