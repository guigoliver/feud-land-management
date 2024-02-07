import { Acre } from 'src/acre/entities/acre.entity';
import { LandParcel } from 'src/land-parcel/entities/land-parcel.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Noble {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  houseName: string;

  @Column()
  password: string;

  @Column({ unique: true })
  userName: string;

  @Column()
  ownedLandParcels?: LandParcel[];

  @Column()
  ownedAcres?: Acre[];

  @Column()
  treasury?: number;
}
