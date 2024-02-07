import { Module } from '@nestjs/common';
import { SerfService } from './serf.service';
import { SerfController } from './serf.controller';

@Module({
  controllers: [SerfController],
  providers: [SerfService],
})
export class SerfModule {}
