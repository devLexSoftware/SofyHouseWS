import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InmuebleConServicio } from '../inmueble-con-servicios/inmueble-con-servicios.entity';

@Entity('servicios')
export class Servicio {
  @PrimaryGeneratedColumn()
  id_servicio: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  descripcion: string;

  @OneToMany(
    type => InmuebleConServicio,
    inmConServ => inmConServ.id_servicio,
  )
  inmuebleConServicio: InmuebleConServicio[];
}
