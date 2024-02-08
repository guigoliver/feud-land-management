import { PartialType } from '@nestjs/mapped-types';
import { CreateSerfDto } from './create-serf.dto';
import { Acre } from 'src/acre/entities/acre.entity';

export class UpdateSerfDto extends PartialType(CreateSerfDto) {
  lordId: string;

  workedAcres?: Acre[];

  landParcelId?: string;
}
