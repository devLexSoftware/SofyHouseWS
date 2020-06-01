import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ciudades } from '../ciudades/ciudades.entity';

@Entity("estados")
export class Estados{

    @PrimaryGeneratedColumn()
    id_estado:number;

    @Column('varchar', { length: 45, nullable: true, default: null })
    descripcion: string;

    @OneToMany(type=> Ciudades, ciudad=>ciudad.id_estado)
    ciudades:Ciudades[];
}