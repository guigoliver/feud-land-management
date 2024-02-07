import { PartialType } from '@nestjs/mapped-types';
import { CreateLandParcelDto } from './create-land-parcel.dto';

export class UpdateLandParcelDto extends PartialType(CreateLandParcelDto) {}
