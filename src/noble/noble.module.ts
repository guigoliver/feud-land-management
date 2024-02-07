import { Module } from '@nestjs/common';
import { NobleService } from './noble.service';
import { NobleController } from './noble.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noble } from './entities/noble.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Noble])],
  controllers: [NobleController],
  providers: [NobleService],
})
export class NobleModule {}
