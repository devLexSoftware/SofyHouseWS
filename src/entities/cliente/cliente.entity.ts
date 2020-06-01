import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Evento } from '../evento/evento.entity';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  nombres: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  apellidos: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  inicio_contrato: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  fin_contrato: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  telefono: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  usuario: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  password: string;

  @Column('varchar', { length: 45, nullable: true, default: null })
  correo: string;

  @Column('blob', { nullable: true, default: null })
  contrato: string;

  @Column('blob', { nullable: true, default: null })
  INE: string;

  @Column('blob', { nullable: true, default: null })
  foto_perfil: string;

  @OneToMany(
    type => Evento,
    evento => evento.id_cliente,
  )
  eventos: Evento[];
}
