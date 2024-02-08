import { Acre } from 'src/acre/entities/acre.entity';

export class CreateSerfDto {
  id: string;

  name: string;

  lordId: string;

  workedAcres?: Acre[];

  landParcelId?: string;
}
