import { UsersService } from './users.service';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getCurrentUser(@Param() params: any) {
    try {
      return await this.usersService.getCurrentUser(params.id);
    } catch (error) {
      throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'Not found this user!',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }
}