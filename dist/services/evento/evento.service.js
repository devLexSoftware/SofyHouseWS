"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const evento_entity_1 = require("../../entities/evento/evento.entity");
const typeorm_2 = require("typeorm");
let EventoService = class EventoService {
    constructor(eventoRepository) {
        this.eventoRepository = eventoRepository;
    }
    async getAllEvents() {
        return await this.eventoRepository.find({
            relations: [
                "id_categoria_evento",
                "id_categoria_evento.id_problema_evento",
                "id_estatus_evento"
            ]
        });
    }
    async getEventById(eventId) {
        return await this.eventoRepository.findOne({
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
    async getEventByIdProv(prov) {
        const proveedor = parseInt(prov);
        return await this.eventoRepository.find({
            where: [{ id_proveedor: proveedor }],
            relations: [
                "id_categoria_evento",
                "id_categoria_evento.id_problema_evento",
                "id_estatus_evento"
            ]
        });
    }
    async getEventByIdClient(prov) {
        const proveedor = parseInt(prov);
        return await this.eventoRepository.find({
            where: [{ id_cliente: proveedor }],
            relations: [
                "id_categoria_evento",
                "id_categoria_evento.id_problema_evento",
                "id_estatus_evento"
            ]
        });
    }
    async getEventsByPropertyId(propertyId) {
        return await this.eventoRepository.find({
            where: [{ id_inmueble: propertyId }],
            relations: [
                "id_categoria_evento",
                "id_categoria_evento.id_problema_evento",
                "id_estatus_evento"
            ]
        });
    }
    async updateEventStatus(dataToUpdate) {
        const resp = await this.eventoRepository.findOne({
            where: [{ id_evento: dataToUpdate.id_evento }]
        });
        return await this.eventoRepository.update({ id_evento: dataToUpdate.id_evento }, {
            id_estatus_evento: dataToUpdate.estatus_evento,
            id_proveedor: dataToUpdate.id_proveedor
        });
    }
    async createEventos(eventoData) {
        try {
            console.log(eventoData);
            const res = this.eventoRepository.create(eventoData);
            const EventoDT = await this.eventoRepository.save(res);
            return EventoDT.id_evento
                ? {
                    status: "success",
                    message: "Evento Registrado Correctamente",
                }
                : {
                    status: "error",
                    message: "Ocurrió un error al registrar el evento, intentelo de nuevo."
                };
        }
        catch (error) {
            console.log("ERROR===>", error);
            if (error.code == "ER_DUP_ENTRY")
                return {
                    status: "error",
                    message: "Ocurrió un error al registrar el evento, intentelo de nuevo."
                };
        }
    }
};
EventoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(evento_entity_1.Evento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventoService);
exports.EventoService = EventoService;
//# sourceMappingURL=evento.service.js.map