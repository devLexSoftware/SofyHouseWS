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
const cotizaciones_entity_1 = require("../../entities/cotizaciones/cotizaciones.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const util_1 = require("util");
let CotizacionService = class CotizacionService {
    constructor(cotizacionRepository) {
        this.cotizacionRepository = cotizacionRepository;
    }
    async getPropertyByID(quotarionId) {
        const cotizacion = await this.cotizacionRepository.findOne({
            where: [{ id_cotizacion: quotarionId }],
            relations: [
                "id_estatus_evento",
                'id_evento',
                "id_evento.id_categoria_evento",
                "id_evento.id_categoria_evento.id_problema_evento",
                "id_evento.id_estatus_evento"
            ]
        });
        if (!util_1.isNullOrUndefined(cotizacion.evidencia)) {
            const buf = Buffer.from(cotizacion.evidencia, "binary");
            cotizacion.evidencia = buf.toString("base64");
        }
        return cotizacion;
    }
    async getAllQuotations() {
        return await this.cotizacionRepository.find({
            relations: [
                "id_estatus_evento",
                "id_evento",
                "id_evento.id_categoria_evento",
                "id_evento.id_categoria_evento.id_problema_evento",
                "id_evento.id_estatus_evento"
            ]
        });
    }
    async createContizacion(cotizacionData) {
        try {
            if (!util_1.isNullOrUndefined(cotizacionData.evidencia)) {
                const buff = new Buffer(cotizacionData.evidencia, 'base64');
                cotizacionData.evidencia = buff;
            }
            console.log(cotizacionData);
            const res = this.cotizacionRepository.create(cotizacionData);
            const CotizacionDT = await this.cotizacionRepository.save(res);
            return CotizacionDT.id_cotizacion
                ? {
                    status: "success",
                    message: "Cotización Registrada Correctamente",
                }
                : {
                    status: "error",
                    message: "Ocurrió un error al registrar la cotización, intentelo de nuevo."
                };
        }
        catch (error) {
            console.log("ERROR===>", error);
            if (error.code == "ER_DUP_ENTRY")
                return {
                    status: "error",
                    message: "Ocurrió un error al registrar la cotización, intentelo de nuevo."
                };
        }
    }
    async updateQuotStatus(dataToUpdate) {
        const res = await this.cotizacionRepository.findOne({
            where: [{ id_cotizacion: dataToUpdate.id_evento }]
        });
        console.log(res);
        return await this.cotizacionRepository.update({ id_cotizacion: dataToUpdate.id_evento }, { id_estatus_evento: dataToUpdate.estatus_evento });
    }
};
CotizacionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(cotizaciones_entity_1.Cotizacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CotizacionService);
exports.CotizacionService = CotizacionService;
//# sourceMappingURL=cotizacion.service.js.map