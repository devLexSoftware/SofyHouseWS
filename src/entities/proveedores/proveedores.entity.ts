import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Evento } from '../evento/evento.entity';
import { Cotizacion } from '../cotizaciones/cotizaciones.entity';

@Entity('proveedores')
export class Proveedor {
  @PrimaryGeneratedColumn()
  id_proveedor: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  nombres: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  apellidos: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  correo: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  password: string;

  @Column('blob', { nullable: true, default: null })
  foto_perfil: string;

  @OneToMany(
    type => Evento,
    eventos => eventos.id_proveedor,
  )
  eventos: Evento[];

  @OneToMany(
    type => Cotizacion,
    cotizacion => cotizacion.id_proveedor,
  )
  cotizaciones: Cotizacion[];
}
