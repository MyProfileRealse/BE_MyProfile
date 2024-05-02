import { Controller, Get } from '@nestjs/common';
import { WorkService } from './work.service';
import { Work } from 'src/entities/work.schema';

@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get('/getWorks')
  getAllWork(): Promise<Work[]> {
    return this.workService.getAllWork();
  }
}
