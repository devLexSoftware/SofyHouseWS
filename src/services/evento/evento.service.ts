import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Evento } from "../../entities/evento/evento.entity";
import { Repository } from "typeorm";

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento) private eventoRepository: Repository<Evento>
  ) { }

  async getAllEvents(): Promise<Evento[]> {
    return await this.eventoRepository.find({
      relations: [
        "id_categoria_evento",
        "id_categoria_evento.id_problema_evento",
        "id_estatus_evento"
      ]
    });
  }

  async getEventById(eventId: string): Promise<Evento> {
    return await this.eventoRepository.findOne({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_evento: eventId }],
      relations: [
        "id_categoria_evento",
        "id_categoria_evento.id_problema_evento",
        "id_estatus_evento",
        "id_inmueble",
        "id_inmueble.id_ciudad",
        "id_inmueble.id_ciudad.id_estado"
      ]
    });
  }
  async getEventByIdProv(prov: string): Promise<Evento[]> {
    const proveedor = parseInt(prov);
    return await this.eventoRepository.find({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_proveedor: proveedor }],
      relations: [
        "id_categoria_evento",
        "id_categoria_evento.id_problema_evento",
        "id_estatus_evento"
      ]
    });
  }
  // getEventByIdClient
  async getEventByIdClient(prov: string): Promise<Evento[]> {
    const proveedor = parseInt(prov);
    return await this.eventoRepository.find({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_cliente: proveedor }],
      relations: [
        "id_categoria_evento",
        "id_categoria_evento.id_problema_evento",
        "id_estatus_evento"
      ]
    });
  }
  async getEventsByPropertyId(propertyId: string): Promise<Evento[]> {
    return await this.eventoRepository.find({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_inmueble: propertyId }],
      relations: [
        "id_categoria_evento",
        "id_categoria_evento.id_problema_evento",
        "id_estatus_evento"
      ]
    });
  }

  async updateEventStatus(dataToUpdate: any): Promise<any> {
    const resp = await this.eventoRepository.findOne({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_evento: dataToUpdate.id_evento }]
    });
    return await this.eventoRepository.update(
      // eslint-disable-next-line @typescript-eslint/camelcase
      { id_evento: dataToUpdate.id_evento },
      // eslint-disable-next-line @typescript-eslint/camelcase
      {
        // eslint-disable-next-line @typescript-eslint/camelcase
        id_estatus_evento: dataToUpdate.estatus_evento,
        // eslint-disable-next-line @typescript-eslint/camelcase
        id_proveedor: dataToUpdate.id_proveedor
      }
    );
  }
  async  createEventos(eventoData: Evento): Promise<object> {
    try {
      console.log(eventoData);

      const res = this.eventoRepository.create(eventoData);
      const EventoDT = await this.eventoRepository.save(res);

      // delete userData["password"];
      return EventoDT.id_evento
        ? {
          status: "success",
          message: "Evento Registrado Correctamente",

        }
        : {
          status: "error",
          message:
            "Ocurrió un error al registrar el evento, intentelo de nuevo."
        };
    } catch (error) {
      console.log("ERROR===>", error);
      if (error.code == "ER_DUP_ENTRY")
        return {
          status: "error",
          message: "Ocurrió un error al registrar el evento, intentelo de nuevo."
        };
    }
  }
}
