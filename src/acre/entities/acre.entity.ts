import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum ProductivityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

@Entity()
export class Acre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productivityLevel?: ProductivityLevel = ProductivityLevel.low;

  @Column()
  price?: number;

  @Column()
  isOwned: boolean;

  @Column()
  isCultivated: boolean;

  @Column()
  landParcelID?: string;

  @Column()
  ownerId?: string;

  @Column()
  productivityPoints: number;

  @Column()
  cost?: number;

  @Column()
  serfId?: string;
}
