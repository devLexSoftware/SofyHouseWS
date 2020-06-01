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
import * as crypto from 'crypto';
import { TipoUsuario } from "../tipo_usuario/tipo_usuario.entity";

@Entity("administrador")
export class Administrador {
  @PrimaryGeneratedColumn()
  id_administrador: number;

  @Column("varchar", { length: 45 })
  nombres: string; 

  @Column("varchar", { length: 45 })
  apellidos: string;

  @Column("varchar", { length: 45, unique: true })
  correo: string;

  hashPassword(password) {
    return crypto.createHmac("sha256", password).digest("hex");
  }

  @BeforeInsert()  
  BeforeInsertPassword() {
    if (this.password) this.password = this.hashPassword(this.password);
  }

  @Column("varchar", { length: 255 })
  password: string;

  @CreateDateColumn()
  fecha_creacion: Date;

  @Column("blob", { nullable: true, default: null })
  foto_perfil: any;

 
  @OneToOne(
    type => TipoUsuario,
    // // eslint-disable-next-line @typescript-eslint/camelcase
    // tipo_usuario => tipo_usuario.descripcion
  )
  @JoinColumn({ name: "tipo_id" })
  tipo_id: TipoUsuario;
  
}
