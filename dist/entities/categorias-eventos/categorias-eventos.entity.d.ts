import { Evento } from '../evento/evento.entity';
import { ProblemaEvento } from '../problemas-eventos/problemas-eventos.entity';
export declare class CategoriaEvento {
    id_categoria_evento: number;
    descripcion: string;
    id_problema_evento: ProblemaEvento;
    eventos: Evento[];
}
