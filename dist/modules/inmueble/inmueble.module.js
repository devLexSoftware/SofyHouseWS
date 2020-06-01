"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const inmueble_service_1 = require("../../services/inmueble/inmueble.service");
const inmueble_controller_1 = require("../../controllers/inmueble/inmueble.controller");
const typeorm_1 = require("@nestjs/typeorm");
const inmuebles_entity_1 = require("../../entities/inmuebles/inmuebles.entity");
let InmuebleModule = class InmuebleModule {
};
InmuebleModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([inmuebles_entity_1.Inmueble])],
        providers: [inmueble_service_1.InmuebleService],
        controllers: [inmueble_controller_1.InmuebleController]
    })
], InmuebleModule);
exports.InmuebleModule = InmuebleModule;
//# sourceMappingURL=inmueble.module.js.map