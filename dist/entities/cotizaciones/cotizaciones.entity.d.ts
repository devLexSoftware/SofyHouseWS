import { EstatusEvento } from '../estatus-eventos/estatus-eventos.entity';
import { Evento } from '../evento/evento.entity';
export declare class Cotizacion {
    id_cotizacion: number;
    descripcion: string;
    precio: number;
    evidencia: any;
    id_proveedor: number;
    id_estatus_evento: EstatusEvento;
    id_evento: Evento;
}
