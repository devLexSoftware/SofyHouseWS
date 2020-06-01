import { Evento } from "../../entities/evento/evento.entity";
import { EventoService } from "../../services/evento/evento.service";
export declare class EventoController {
    private eventoService;
    constructor(eventoService: EventoService);
    getAllEvents(): Promise<Evento[]>;
    getEventById(eventId: string): Promise<Evento>;
    getEventByIdProv(eventId: string): Promise<Evento[]>;
    getEventByIdClient(eventId: string): Promise<Evento[]>;
    getEventsByPropertyId(propertyId: string): Promise<Evento[]>;
    updateEventStatus(dataToUpdate: any): Promise<any>;
    createEvento(dataToUpdate: Evento): Promise<object>;
}
