import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DuenoInmueble } from '../dueno-inmueble/dueno-inmueble.entity';

@Entity('estatus_dueno')
export class EstatusDueno {
  @PrimaryGeneratedColumn()
  id_estatus_dueno: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  descripcion: string;

  @OneToMany(
    type => DuenoInmueble,
    duenoInmueble => duenoInmueble.id_estatus_dueno,
  )
  duenoInmueble: DuenoInmueble[];
}
