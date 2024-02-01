import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Acre {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    productivity?: string

    @Column()
    price?: number

    @Column()
    isFree: boolean

    @Column()
    isUsed: boolean

    @Column()
    landParcelID?: string
}
