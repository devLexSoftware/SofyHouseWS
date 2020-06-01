import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Evento } from '../evento/evento.entity';
import { ProblemaEvento } from '../problemas-eventos/problemas-eventos.entity';

@Entity('categorias_eventos')
export class CategoriaEvento {
  @PrimaryGeneratedColumn()
  id_categoria_evento: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  descripcion: string;

  //id_problemas_eventos
  @ManyToOne(
    type => ProblemaEvento,
    problemaEvento => problemaEvento.CategoriasEventos,
  )
  @JoinColumn({ name: 'id_problema_evento' })
  id_problema_evento: ProblemaEvento;

  @OneToMany(
    type => Evento,
    eventos => eventos.id_categoria_evento,
  )
  eventos: Evento[];
}
