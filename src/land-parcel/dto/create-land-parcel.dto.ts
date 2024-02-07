import { Acre } from 'src/acre/entities/acre.entity';

export class CreateLandParcelDto {
  acres: Acre[];

  ownerId?: string;
}
