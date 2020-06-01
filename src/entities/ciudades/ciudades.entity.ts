import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Estados } from '../estados/estados.entity';
import { Inmueble } from '../inmuebles/inmuebles.entity';

@Entity('ciudades')
export class Ciudades {

  @PrimaryGeneratedColumn()
  id_ciudad: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  descripcion: string;

  @ManyToOne(type=>Estados, estado=>estado.ciudades)
  @JoinColumn({name:"id_estado"})
  id_estado:Estados;

  @OneToMany(type=>Inmueble,inmueble=>inmueble.id_ciudad)
  inmuebles:Inmueble[];
}
