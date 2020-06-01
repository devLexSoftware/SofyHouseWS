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
const contratos_service_1 = require("../../services/contratos/contratos.service");
const contrato_entity_1 = require("../../entities/contrato/contrato.entity");
let ContratosController = class ContratosController {
    constructor(contratoServ) {
        this.contratoServ = contratoServ;
    }
    async getContratoList(inmuebeId) {
        return await this.contratoServ.getContratoInmueble(inmuebeId);
    }
    async getContratoListCliente(clienteId) {
        return await this.contratoServ.getContratoCliente(clienteId);
    }
    async createUserCli(contratoDta) {
        return await this.contratoServ.createContrato(contratoDta);
    }
};
__decorate([
    common_1.Get('get_contrato_inmueble/:id'),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContratosController.prototype, "getContratoList", null);
__decorate([
    common_1.Get('get_contrato_inmueble_cliente/:id'),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContratosController.prototype, "getContratoListCliente", null);
__decorate([
    common_1.Post("create_contrato"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contrato_entity_1.Contrato]),
    __metadata("design:returntype", Promise)
], ContratosController.prototype, "createUserCli", null);
ContratosController = __decorate([
    common_1.Controller('contratos'),
    __metadata("design:paramtypes", [contratos_service_1.ContratosService])
], ContratosController);
exports.ContratosController = ContratosController;
//# sourceMappingURL=contratos.controller.js.map