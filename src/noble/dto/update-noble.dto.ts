import { PartialType } from '@nestjs/mapped-types';
import { CreateNobleDto } from './create-noble.dto';
import { LandParcel } from 'src/land-parcel/entities/land-parcel.entity';

export class UpdateNobleDto extends PartialType(CreateNobleDto) {
  treasury?: number;

  ownedLandParcels?: LandParcel[];
}
