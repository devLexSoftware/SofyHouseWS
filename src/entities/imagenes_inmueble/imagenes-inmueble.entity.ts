import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Inmueble } from '../inmuebles/inmuebles.entity';

@Entity("imagenes_inmueble")
export class ImagenesInmueble {
  @PrimaryGeneratedColumn()
  id_imagen: number;

  @ManyToOne(
    type => Inmueble,
    inmueble => inmueble.imagenesInmueble
  )
  @JoinColumn({ name: "id_inmueble" })
  id_inmueble: Inmueble;

  @Column("blob", { nullable: true, default: null })
  foto: any;
}
