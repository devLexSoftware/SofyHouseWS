import { Evento } from '../evento/evento.entity';
import { Cotizacion } from '../cotizaciones/cotizaciones.entity';
export declare class Proveedor {
    id_proveedor: number;
    nombres: string;
    apellidos: string;
    correo: string;
    password: string;
    foto_perfil: string;
    eventos: Evento[];
    cotizaciones: Cotizacion[];
}
