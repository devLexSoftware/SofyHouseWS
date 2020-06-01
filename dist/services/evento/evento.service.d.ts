import { Evento } from "../../entities/evento/evento.entity";
import { Repository } from "typeorm";
export declare class EventoService {
    private eventoRepository;
    constructor(eventoRepository: Repository<Evento>);
    getAllEvents(): Promise<Evento[]>;
    getEventById(eventId: string): Promise<Evento>;
    getEventByIdProv(prov: string): Promise<Evento[]>;
    getEventByIdClient(prov: string): Promise<Evento[]>;
    getEventsByPropertyId(propertyId: string): Promise<Evento[]>;
    updateEventStatus(dataToUpdate: any): Promise<any>;
    createEventos(eventoData: Evento): Promise<object>;
}
