import { Evento } from '../evento/evento.entity';
import { Cotizacion } from '../../entities/cotizaciones/cotizaciones.entity';
export declare class EstatusEvento {
    id_estatus: number;
    descripcion: string;
    eventos: Evento[];
    cotizacion: Cotizacion[];
}
