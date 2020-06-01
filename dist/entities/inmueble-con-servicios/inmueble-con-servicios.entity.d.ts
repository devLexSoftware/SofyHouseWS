import { Servicio } from "../servicios/servicios.entity";
import { Inmueble } from "../inmuebles/inmuebles.entity";
export declare class InmuebleConServicio {
    id: number;
    id_servicio: Servicio;
    id_inmueble: Inmueble;
    evidencia: string;
    fecha: Date;
}
