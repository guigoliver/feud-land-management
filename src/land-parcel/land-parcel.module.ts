import { Module } from '@nestjs/common';
import { LandParcelService } from './land-parcel.service';
import { LandParcelController } from './land-parcel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LandParcel } from './entities/land-parcel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LandParcel])],
  controllers: [LandParcelController],
  providers: [LandParcelService],
})
export class LandParcelModule {}
