import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Ciudades } from "../ciudades/ciudades.entity";
import { Evento } from "../evento/evento.entity";
import { Zona } from "../zonas/zonas.entity";
import { InmuebleConServicio } from "../inmueble-con-servicios/inmueble-con-servicios.entity";
import { DuenoInmueble } from "../dueno-inmueble/dueno-inmueble.entity";
import { ImagenesInmueble } from "../imagenes_inmueble/imagenes-inmueble.entity";

@Entity()
export class Inmueble {
  @PrimaryGeneratedColumn()
  id_inmueble: number;

  @Column("varchar", { length: 45, nullable: true, default: null })
  calle: string;

  @Column("varchar", { length: 10, nullable: true, default: null })
  numero_interior: string;

  @Column("varchar", { length: 10, nullable: true, default: null })
  numero_exterior: string;

  @Column("varchar", { length: 45, nullable: true, default: null })
  colonia: string;

  @Column("varchar", { length: 6, nullable: true, default: null })
  codigo_postal: string;

  @Column("varchar", { length: 10, nullable: true, default: null })
  precio: string;

  @Column("double", { nullable: true, default: null })
  latitud: number;

  @Column("double", { nullable: true, default: null })
  longitud: number;

  @Column("blob", { nullable: true, default: null })
  foto_principal: any;

  @ManyToOne(
    type => Zona,
    zona => zona.inmuebles
  )
  @JoinColumn({ name: "id_zona" })
  id_zona: Zona;

  @ManyToOne(
    type => Ciudades,
    ciudad => ciudad.inmuebles
  )
  @JoinColumn({ name: "id_ciudad" })
  id_ciudad: Ciudades;

  @ManyToOne(
    type => DuenoInmueble,
    duenoInmueble => duenoInmueble.inmuebles
  )
  @JoinColumn({ name: "id_dueno_inmueble" })
  id_dueno_inmueble: DuenoInmueble;

  @OneToMany(
    type => Evento,
    eventos => eventos.id_inmueble
  )
  eventos: Evento[];

  @OneToMany(
    type => InmuebleConServicio,
    inmConServicio => inmConServicio.id_inmueble
  )
  inmuebleConServicio: InmuebleConServicio[];

  @OneToMany(
    type => ImagenesInmueble,
    imgInmueble => imgInmueble.id_inmueble
  )
  imagenesInmueble: ImagenesInmueble[];
}
