import { Acre } from 'src/acre/entities/acre.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Serf {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lordId: string;

  @Column()
  workedAcres: Acre[];

  @Column()
  landParcelId: string;
}
