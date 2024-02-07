import { Module } from '@nestjs/common';
import { LandParcelService } from './land-parcel.service';
import { LandParcelController } from './land-parcel.controller';

@Module({
  controllers: [LandParcelController],
  providers: [LandParcelService],
})
export class LandParcelModule {}
