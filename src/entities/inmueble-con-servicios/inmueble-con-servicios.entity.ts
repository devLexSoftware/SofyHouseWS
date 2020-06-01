import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Servicio } from "../servicios/servicios.entity";
import { Inmueble } from "../inmuebles/inmuebles.entity";

@Entity("inmueble_con_servicios")
export class InmuebleConServicio {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Servicio,
    servicio => servicio.inmuebleConServicio
  )
  @JoinColumn({ name: "id_servicio" })
  id_servicio: Servicio;

  @ManyToOne(
    type => Inmueble,
    inmueble => inmueble.inmuebleConServicio
  )
  @JoinColumn({ name: "id_inmueble" })
  id_inmueble: Inmueble;

  @Column("mediumblob", { nullable: true, default: null })
  evidencia: string;

  @Column("date", { nullable: true, default: null })
  fecha: Date;
}
