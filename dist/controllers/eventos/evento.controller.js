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
const evento_entity_1 = require("../../entities/evento/evento.entity");
const evento_service_1 = require("../../services/evento/evento.service");
let EventoController = class EventoController {
    constructor(eventoService) {
        this.eventoService = eventoService;
    }
    async getAllEvents() {
        return await this.eventoService.getAllEvents();
    }
    async getEventById(eventId) {
        return await this.eventoService.getEventById(eventId);
    }
    async getEventByIdProv(eventId) {
        return await this.eventoService.getEventByIdProv(eventId);
    }
    async getEventByIdClient(eventId) {
        return await this.eventoService.getEventByIdClient(eventId);
    }
    async getEventsByPropertyId(propertyId) {
        return await this.eventoService.getEventsByPropertyId(propertyId);
    }
    async updateEventStatus(dataToUpdate) {
        return await this.eventoService.updateEventStatus(dataToUpdate);
    }
    async createEvento(dataToUpdate) {
        return await this.eventoService.createEventos(dataToUpdate);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "getAllEvents", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "getEventById", null);
__decorate([
    common_1.Get("proveedor/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "getEventByIdProv", null);
__decorate([
    common_1.Get("cliente/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "getEventByIdClient", null);
__decorate([
    common_1.Get("inmueble/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "getEventsByPropertyId", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "updateEventStatus", null);
__decorate([
    common_1.Post('create_event'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evento_entity_1.Evento]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "createEvento", null);
EventoController = __decorate([
    common_1.Controller("eventos"),
    __metadata("design:paramtypes", [evento_service_1.EventoService])
], EventoController);
exports.EventoController = EventoController;
//# sourceMappingURL=evento.controller.js.map