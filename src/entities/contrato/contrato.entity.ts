import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
  OneToOne
} from "typeorm";
import { Inmueble } from "../inmuebles/inmuebles.entity";

@Entity("contrato_inmueble")
export class Contrato {
  @PrimaryGeneratedColumn()
  id_contrato: number;

  @Column("date", { nullable: true })
  fecha_inicio: Date;

  @Column("date", { nullable: true })
  fecha_fin: Date;

  @Column("varchar", { nullable: true })
  telefono: string;

  @Column("mediumblob", { nullable: true })
  ine: any;
  @Column("mediumblob", { nullable: true })
  contrato: any;
  @Column("numeric", { nullable: true })
  id_dueno: any;
  @Column("numeric", { nullable: true })
  id_cliente: any;
  @OneToOne(
    type => Inmueble,
    // // eslint-disable-next-line @typescript-eslint/camelcase
    inmueble => inmueble.id_inmueble
  )
  @JoinColumn({ name: "id_inmueble" })
  id_inmueble: Inmueble;

}
