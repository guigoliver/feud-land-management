import { Module } from '@nestjs/common';
import { AcreService } from './acre.service';
import { AcreController } from './acre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acre } from './entities/acre.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Acre
    ])
  ],
  controllers: [AcreController],
  providers: [AcreService],
})
export class AcreModule {}
