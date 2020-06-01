import { Controller, Get, Param, Put, Body, Post } from "@nestjs/common";
import { Evento } from "../../entities/evento/evento.entity";
import { EventoService } from "../../services/evento/evento.service";

@Controller("eventos")
export class EventoController {
  constructor(private eventoService: EventoService) {}

  @Get()
  async getAllEvents(): Promise<Evento[]> {
    return await this.eventoService.getAllEvents();
  }

  @Get(":id")
  async getEventById(@Param("id") eventId: string): Promise<Evento> {
    return await this.eventoService.getEventById(eventId);
  }

  @Get("proveedor/:id")
  async getEventByIdProv(@Param("id") eventId: string): Promise<Evento[]> {
    return await this.eventoService.getEventByIdProv(eventId);
  }
  @Get("cliente/:id")
  async getEventByIdClient(@Param("id") eventId: string): Promise<Evento[]> {
    return await this.eventoService.getEventByIdClient(eventId);
  }

  @Get("inmueble/:id")
  async getEventsByPropertyId(
    @Param("id") propertyId: string
  ): Promise<Evento[]> {
    return await this.eventoService.getEventsByPropertyId(propertyId);
  }

  @Put()
  async updateEventStatus(@Body() dataToUpdate:any): Promise<any>{
    return await this.eventoService.updateEventStatus(dataToUpdate);
  }
  @Post('create_event')
  async createEvento(@Body() dataToUpdate:Evento): Promise<object>{
    return await this.eventoService.createEventos(dataToUpdate);
  }
}
