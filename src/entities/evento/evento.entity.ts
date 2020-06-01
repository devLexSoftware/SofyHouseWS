import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Cliente } from "../cliente/cliente.entity";
import { EstatusEvento } from "../estatus-eventos/estatus-eventos.entity";
import { CategoriaEvento } from "../categorias-eventos/categorias-eventos.entity";
import { Proveedor } from "../proveedores/proveedores.entity";
import { Inmueble } from "../inmuebles/inmuebles.entity";

@Entity("eventos")
export class Evento {
  @PrimaryGeneratedColumn()
  id_evento: number; 

  @Column("varchar", { length: 255, nullable: true, default: null })
  descripcion_problema: string;

  @Column("datetime", { nullable: true, default: () => 'CURRENT_TIMESTAMP'})
  fecha_creacion: Date;

  @ManyToOne(
    type => Cliente,
    cliente => cliente.eventos
  )
  @JoinColumn({ name: "id_cliente" })
  id_cliente: Cliente;

  @ManyToOne(
    type => CategoriaEvento,
    categoriaEvento => categoriaEvento.eventos
  )
  @JoinColumn({ name: "id_categoria_evento" })
  id_categoria_evento: CategoriaEvento;

  @ManyToOne(
    type => EstatusEvento,
    estatusEvento => estatusEvento.eventos
  )
  @JoinColumn({ name: "id_estatus_evento" })
  id_estatus_evento: EstatusEvento;

  @ManyToOne(
    type => Proveedor,
    proveedor => proveedor.eventos
  )
  @JoinColumn({ name: "id_proveedor" })
  id_proveedor: Proveedor;

  @ManyToOne(
    type => Inmueble,
    inmueble => inmueble.eventos
  )
  @JoinColumn({ name: "id_inmueble" })
  id_inmueble: Inmueble;
}
