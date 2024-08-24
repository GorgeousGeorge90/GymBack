import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param, Post
} from "@nestjs/common";
import { SessionsService } from './sessions.service';


@Controller('sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Get()
  async getAll() {
    return await this.sessionsService.getAll();
  }

  @Get(':id')
  async getCurrentSession(@Param() params: any) {
    try {
      return await this.sessionsService.getCurrent(params.id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: "Can't find this session!",
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  @Post()
  async addNewSession() {
    await this.sessionsService.addNewSession();
  }

  @Delete(':id')
  async deleteCurrentSession(@Param('id') params: string) {
    await this.sessionsService.deleteCurrentSession(params);
  }
}
