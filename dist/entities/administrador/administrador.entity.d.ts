import { TipoUsuario } from "../tipo_usuario/tipo_usuario.entity";
export declare class Administrador {
    id_administrador: number;
    nombres: string;
    apellidos: string;
    correo: string;
    hashPassword(password: any): string;
    BeforeInsertPassword(): void;
    password: string;
    fecha_creacion: Date;
    foto_perfil: any;
    tipo_id: TipoUsuario;
}
