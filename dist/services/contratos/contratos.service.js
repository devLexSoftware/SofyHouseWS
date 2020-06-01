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
const contrato_entity_1 = require("../../entities/contrato/contrato.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const util_1 = require("util");
let ContratosService = class ContratosService {
    constructor(ContratoRepository) {
        this.ContratoRepository = ContratoRepository;
    }
    async getContratoInmueble(IdInmueble) {
        const ContratoData = await this.ContratoRepository.findOne({
            where: [{ id_inmueble: IdInmueble }],
        });
        if (!util_1.isNullOrUndefined(ContratoData)) {
            return {
                estatus: "success",
                data: ContratoData
            };
        }
        else {
            return {
                estatus: "success",
                data: ContratoData
            };
        }
    }
    async getContratoCliente(IdCliente) {
        const ContratoData = await this.ContratoRepository.find({
            where: [{ id_cliente: IdCliente }],
            relations: ['id_inmueble',
                'id_inmueble.id_ciudad',
                'id_inmueble.id_ciudad.id_estado'
            ]
        });
        ContratoData.forEach(element => {
            if (util_1.isNullOrUndefined(element.id_inmueble.foto_principal) == false) {
                const buf = Buffer.from(element.id_inmueble.foto_principal, "binary");
                element.id_inmueble.foto_principal = buf.toString("base64");
            }
        });
        return ContratoData;
    }
    async createContrato(contratoData) {
        try {
            if (!util_1.isNullOrUndefined(contratoData.ine)) {
                const buff = new Buffer(contratoData.ine, 'base64');
                contratoData.ine = buff;
            }
            if (!util_1.isNullOrUndefined(contratoData.contrato)) {
                const buff = new Buffer(contratoData.contrato, 'base64');
                contratoData.contrato = buff;
            }
            const res = this.ContratoRepository.create(contratoData);
            const cto = await this.ContratoRepository.save(res);
            return cto.id_contrato
                ? {
                    status: "success",
                    message: "Usuario creado correctamente",
                }
                : {
                    status: "error",
                    message: "Ocurrió un error al registrar el usuario, intentelo de nuevo."
                };
        }
        catch (error) {
            console.log("ERROR===>", error);
            if (error.code == "ER_DUP_ENTRY")
                return {
                    status: "error",
                    message: "El usuario ya se encuentra registrado en el sistema."
                };
        }
    }
};
ContratosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(contrato_entity_1.Contrato)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContratosService);
exports.ContratosService = ContratosService;
//# sourceMappingURL=contratos.service.js.map