"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const imagen_inmueble_service_1 = require("../../services/imagen-inmueble/imagen-inmueble.service");
const imagen_inmueble_controller_1 = require("../../controllers/imagen-inmueble/imagen-inmueble.controller");
const typeorm_1 = require("@nestjs/typeorm");
const imagenes_inmueble_entity_1 = require("../../entities/imagenes_inmueble/imagenes-inmueble.entity");
let ImagenInmuebleModule = class ImagenInmuebleModule {
};
ImagenInmuebleModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([imagenes_inmueble_entity_1.ImagenesInmueble])],
        providers: [imagen_inmueble_service_1.ImagenInmuebleService],
        controllers: [imagen_inmueble_controller_1.ImagenInmuebleController]
    })
], ImagenInmuebleModule);
exports.ImagenInmuebleModule = ImagenInmuebleModule;
//# sourceMappingURL=imagen-inmueble.module.js.map