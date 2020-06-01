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
const inmueble_service_1 = require("../../services/inmueble/inmueble.service");
const inmuebles_entity_1 = require("../../entities/inmuebles/inmuebles.entity");
let InmuebleController = class InmuebleController {
    constructor(inmuebleService) {
        this.inmuebleService = inmuebleService;
    }
    async getAllProperties() {
        return await this.inmuebleService.getAllProperties();
    }
    async getPropertyById(propertyId) {
        return await this.inmuebleService.getPropertyByID(propertyId);
    }
    async getPropertyByIdProp(propertyId) {
        return await this.inmuebleService.getPropertyByIDProp(propertyId);
    }
    async createInmueble(inmuebleData) {
        return await this.inmuebleService.createInmueble(inmuebleData);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InmuebleController.prototype, "getAllProperties", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InmuebleController.prototype, "getPropertyById", null);
__decorate([
    common_1.Get("propietario/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InmuebleController.prototype, "getPropertyByIdProp", null);
__decorate([
    common_1.Post("create_propierty"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inmuebles_entity_1.Inmueble]),
    __metadata("design:returntype", Promise)
], InmuebleController.prototype, "createInmueble", null);
InmuebleController = __decorate([
    common_1.Controller("inmuebles"),
    __metadata("design:paramtypes", [inmueble_service_1.InmuebleService])
], InmuebleController);
exports.InmuebleController = InmuebleController;
//# sourceMappingURL=inmueble.controller.js.map