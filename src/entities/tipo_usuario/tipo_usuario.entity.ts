import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Administrador } from '../../entities/administrador/administrador.entity';

@Entity("tipo_usuario")
export class TipoUsuario {
  @PrimaryGeneratedColumn()
  tipo_id: number;

  @Column("varchar", { length: 255 })
  descripcion: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars  
  @OneToMany(type => Administrador, administrador => administrador.tipo_id)  
  administrador: Administrador[];

}
 