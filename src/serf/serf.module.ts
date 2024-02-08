import { Module } from '@nestjs/common';
import { SerfService } from './serf.service';
import { SerfController } from './serf.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serf } from './entities/serf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Serf])],
  controllers: [SerfController],
  providers: [SerfService],
})
export class SerfModule {}
