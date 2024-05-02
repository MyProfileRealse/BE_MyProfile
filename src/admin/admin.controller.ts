import { Controller, Get } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly userService: AdminService) {}

  @Get('users')
  findAll(): Promise<User[]> {
    console.log('=========');
    return this.userService.findAll();
  }
}
