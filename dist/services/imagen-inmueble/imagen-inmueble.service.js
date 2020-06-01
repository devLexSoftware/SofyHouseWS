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
const imagenes_inmueble_entity_1 = require("../../entities/imagenes_inmueble/imagenes-inmueble.entity");
const typeorm_2 = require("typeorm");
let ImagenInmuebleService = class ImagenInmuebleService {
    constructor(ImagenesInmuebleRepository) {
        this.ImagenesInmuebleRepository = ImagenesInmuebleRepository;
    }
    async createImgInmueble(ImgInmuebleData) {
        try {
            ImgInmuebleData.forEach(async (element) => {
                const buff = new Buffer(element.foto, 'base64');
                element.foto = buff;
                const res = this.ImagenesInmuebleRepository.create(element);
                const ImgResponse = await this.ImagenesInmuebleRepository.save(res);
            });
            return {
                status: "success",
            };
        }
        catch (error) {
            console.log("ERROR===>", error);
            if (error.code == "ER_DUP_ENTRY")
                return {
                    status: "error",
                    message: "Ocurrió un error al registrar el iamgenes, intentelo de nuevo."
                };
        }
    }
};
ImagenInmuebleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(imagenes_inmueble_entity_1.ImagenesInmueble)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImagenInmuebleService);
exports.ImagenInmuebleService = ImagenInmuebleService;
//# sourceMappingURL=imagen-inmueble.service.js.map