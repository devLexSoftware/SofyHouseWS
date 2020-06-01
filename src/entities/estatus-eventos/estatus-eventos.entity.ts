import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Evento } from '../evento/evento.entity';
import { Cotizacion} from '../../entities/cotizaciones/cotizaciones.entity'

@Entity('estatus_eventos')
export class EstatusEvento {

  @PrimaryGeneratedColumn()
  id_estatus: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  descripcion: string;

  @OneToMany(type=>Evento, eventos=>eventos.id_estatus_evento)
  eventos:Evento[];
  
  @OneToMany(type=>Cotizacion, cotizacion=>cotizacion.id_estatus_evento)
  cotizacion:Cotizacion[];
}
