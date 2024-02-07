import { Module } from '@nestjs/common';
import { NobleService } from './noble.service';
import { NobleController } from './noble.controller';

@Module({
  controllers: [NobleController],
  providers: [NobleService],
})
export class NobleModule {}
