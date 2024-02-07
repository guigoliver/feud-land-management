import { Acre } from 'src/acre/entities/acre.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum LandParcelStatus {
  owned = 'owned',
  free = 'free',
  disputed = 'disputed',
  promised = 'promised',
}

enum ProductivityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

@Entity()
export class LandParcel {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name?: string;

  @Column()
  ownerId?: string;

  @Column()
  acres: Acre[];

  @Column()
  landStatus: LandParcelStatus = LandParcelStatus.free;

  @Column()
  totalProductionPoints?: number;

  @Column()
  productivityLevel?: ProductivityLevel = ProductivityLevel.low;

  @Column()
  totalCost?: number;
}
