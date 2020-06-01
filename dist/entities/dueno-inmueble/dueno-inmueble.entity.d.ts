import { EstatusDueno } from '../estatus-dueno/estatus-dueno.entity';
import { Inmueble } from '../inmuebles/inmuebles.entity';
export declare class DuenoInmueble {
    id_dueno: number;
    nombres: string;
    apellidos: string;
    correo: string;
    password: string;
    fecha_creacion: Date;
    foto_perfil: string;
    id_estatus_dueno: EstatusDueno;
    inmuebles: Inmueble[];
}
