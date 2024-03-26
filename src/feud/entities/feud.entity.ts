import { Acre } from 'src/acre/entities/acre.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Feud {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  acres: Acre[];
}
