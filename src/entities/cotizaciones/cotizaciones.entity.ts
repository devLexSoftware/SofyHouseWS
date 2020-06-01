import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Proveedor } from '../proveedores/proveedores.entity';
import { EstatusEvento } from '../estatus-eventos/estatus-eventos.entity';
import { Evento } from '../evento/evento.entity';

@Entity()
export class Cotizacion {
  @PrimaryGeneratedColumn()
  id_cotizacion: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  descripcion: string;

  @Column('decimal', { precision: 12, scale: 2, nullable: true, default: null })
  precio: number;

  @Column('mediumblob', { nullable: true, default: null })
  evidencia: any;
   
  @Column('decimal', { nullable: true, default: null })
  id_proveedor: number;

  @ManyToOne(
    type => EstatusEvento, 
    estatusEvento => estatusEvento.eventos
  )
  @JoinColumn({ name: "id_estatus_evento" })
  id_estatus_evento: EstatusEvento; 

  @OneToOne(
    type => Evento,
    // // eslint-disable-next-line @typescript-eslint/camelcase
    // tipo_usuario => tipo_usuario.descripcion
  )
  @JoinColumn({ name: "id_evento" })
  id_evento: Evento;

  // @ManyToOne(
  //   type => Proveedor,
  //   proveedor => proveedor.cotizaciones,
  // )
  // @JoinColumn({ name: 'id_proveedor' })
  // id_proveedor: Proveedor;
}
