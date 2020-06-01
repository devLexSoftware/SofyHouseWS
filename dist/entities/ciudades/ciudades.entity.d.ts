import { Estados } from '../estados/estados.entity';
import { Inmueble } from '../inmuebles/inmuebles.entity';
export declare class Ciudades {
    id_ciudad: number;
    descripcion: string;
    id_estado: Estados;
    inmuebles: Inmueble[];
}
