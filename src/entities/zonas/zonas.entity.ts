import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inmueble } from '../inmuebles/inmuebles.entity';

@Entity('zonas')
export class Zona {
  @PrimaryGeneratedColumn()
  id_zona: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  descripcion: string;

  @OneToMany(
    type => Inmueble,
    inmueble => inmueble.id_zona,
  )
  inmuebles: Inmueble[];
}
