import { Acre } from 'src/acre/entities/acre.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateLandParcelDto } from '../dto/create-land-parcel.dto';

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

  @Column({ type: 'int' })
  totalProductionPoints?: number;

  @Column()
  productivityLevel?: ProductivityLevel = ProductivityLevel.low;

  @Column({ type: 'int' })
  totalCost?: number;

  static create(input: CreateLandParcelDto) {
    const landParcel = new LandParcel();
    landParcel.acres = input.acres;
    landParcel.ownerId = input.ownerId;
    landParcel.totalProductionPoints = landParcel.acres.reduce(
      (total, acre) => {
        return total + acre.productivityPoints, 0;
      },
      0,
    );
    landParcel.totalCost = landParcel.acres.reduce((total, acre) => {
      return total + acre.cost, 0;
    }, 0);
    landParcel.productivityLevel =
      landParcel.totalProductionPoints <= 300
        ? ProductivityLevel.low
        : landParcel.totalProductionPoints <= 700
          ? ProductivityLevel.medium
          : ProductivityLevel.high;
    return landParcel;
  }
}
