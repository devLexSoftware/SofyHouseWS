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
const inmuebles_entity_1 = require("../../entities/inmuebles/inmuebles.entity");
const typeorm_2 = require("typeorm");
const util_1 = require("util");
let InmuebleService = class InmuebleService {
    constructor(InmuebleRepository) {
        this.InmuebleRepository = InmuebleRepository;
    }
    async getAllProperties() {
        const inmuebles = await this.InmuebleRepository.find({
            relations: ["id_ciudad", "id_ciudad.id_estado", 'id_zona']
        });
        inmuebles.forEach(element => {
            if (util_1.isNullOrUndefined(element.foto_principal) == false) {
                const buf = Buffer.from(element.foto_principal, "binary");
                element.foto_principal = buf.toString("base64");
            }
        });
        return inmuebles;
    }
    async getPropertyByIDProp(propietario) {
        const propietarioId = parseInt(propietario);
        const inmuebles = await this.InmuebleRepository.find({
            where: [{ id_dueno_inmueble: propietarioId }],
            relations: ["id_ciudad", "id_ciudad.id_estado"]
        });
        inmuebles.forEach(element => {
            if (util_1.isNullOrUndefined(element.foto_principal) == false) {
                const buf = Buffer.from(element.foto_principal, "binary");
                element.foto_principal = buf.toString("base64");
            }
        });
        return inmuebles;
    }
    async getPropertyByID(propertyId) {
        const InmuebleId = parseInt(propertyId);
        const inmueble = await this.InmuebleRepository.findOne({
            where: [{ id_inmueble: InmuebleId }],
            relations: [
                "id_ciudad",
                "id_ciudad.id_estado",
                "imagenesInmueble",
                "eventos",
                "eventos.id_categoria_evento",
                "eventos.id_categoria_evento.id_problema_evento"
            ]
        });
        let buf;
        if (!util_1.isNullOrUndefined(inmueble.foto_principal)) {
            buf = Buffer.from(inmueble.foto_principal, "binary");
            inmueble.foto_principal = buf.toString("base64");
            inmueble.imagenesInmueble.forEach(element => {
                const buf = Buffer.from(element.foto, "binary");
                element.foto = buf.toString("base64");
            });
        }
        return inmueble;
    }
    async createInmueble(inmuebleData) {
        try {
            console.log('Inmueble Agregado');
            const buff = new Buffer(inmuebleData.foto_principal, 'base64');
            inmuebleData.foto_principal = buff;
            const res = this.InmuebleRepository.create(inmuebleData);
            const propiertyDT = await this.InmuebleRepository.save(res);
            console.log('Inmueble Agregado');
            return propiertyDT.id_inmueble
                ? {
                    status: "success",
                    message: "Inmueble Registrado Correctamente",
                    id: propiertyDT.id_inmueble
                }
                : {
                    status: "error",
                    message: "Ocurrió un error al registrar el inmueble, intentelo de nuevo."
                };
        }
        catch (error) {
            console.log("ERROR===>", error);
            if (error.code == "ER_DUP_ENTRY")
                return {
                    status: "error",
                    message: "Ocurrió un error al registrar el inmueble, intentelo de nuevo."
                };
        }
    }
};
InmuebleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(inmuebles_entity_1.Inmueble)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InmuebleService);
exports.InmuebleService = InmuebleService;
//# sourceMappingURL=inmueble.service.js.map