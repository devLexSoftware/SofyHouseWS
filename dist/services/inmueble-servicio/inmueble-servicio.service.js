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
const inmueble_con_servicios_entity_1 = require("../../entities/inmueble-con-servicios/inmueble-con-servicios.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let InmuebleServicioService = class InmuebleServicioService {
    constructor(propertyReceiptRepository) {
        this.propertyReceiptRepository = propertyReceiptRepository;
    }
    async getPropertyReceiptsByID(propertyId) {
        const InmuebleId = parseInt(propertyId);
        const receipts = await this.propertyReceiptRepository.find({
            where: [{ id_inmueble: InmuebleId }],
            order: {
                fecha: "DESC"
            },
            relations: ["id_servicio", "id_inmueble"]
        });
        receipts.forEach((elem, indx) => {
            if (elem.evidencia) {
                const buf = Buffer.from(elem.evidencia, "binary");
                elem.evidencia = buf.toString("base64");
            }
            for (let el = indx + 1; el < receipts.length; el++) {
                if (elem.id_inmueble.id_inmueble == receipts[el].id_inmueble.id_inmueble) {
                    if (elem.id_servicio.id_servicio == receipts[el].id_servicio.id_servicio) {
                        receipts.splice(el, 1);
                    }
                }
            }
        });
        return receipts;
    }
};
InmuebleServicioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(inmueble_con_servicios_entity_1.InmuebleConServicio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InmuebleServicioService);
exports.InmuebleServicioService = InmuebleServicioService;
//# sourceMappingURL=inmueble-servicio.service.js.map