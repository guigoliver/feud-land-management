import { Module } from '@nestjs/common';
import { FeudService } from './feud.service';
import { FeudController } from './feud.controller';

@Module({
  controllers: [FeudController],
  providers: [FeudService],
})
export class FeudModule {}
