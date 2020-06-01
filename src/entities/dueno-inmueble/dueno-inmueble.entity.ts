import { EstatusDueno } from '../estatus-dueno/estatus-dueno.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Inmueble } from '../inmuebles/inmuebles.entity';

@Entity()
export class DuenoInmueble {
  @PrimaryGeneratedColumn()
  id_dueno: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  nombres: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  apellidos: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  correo: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  password: string;

  @CreateDateColumn()
  fecha_creacion: Date;

  @Column('blob', { nullable: true, default: null })
  foto_perfil: string;

  @ManyToOne(
    type => EstatusDueno,
    estatusDueno => estatusDueno.duenoInmueble,
  )
  @JoinColumn({ name: 'id_estatus_dueno' })
  id_estatus_dueno: EstatusDueno;

  @OneToMany(
    type => Inmueble,
    inmueble => inmueble.id_dueno_inmueble,
  )
  inmuebles: Inmueble[];
}
