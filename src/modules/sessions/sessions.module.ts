import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [SessionsController],
  providers: [SessionsService],
})
export class SessionsModule {}
