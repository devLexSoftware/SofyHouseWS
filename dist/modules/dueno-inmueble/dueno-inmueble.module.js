"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dueno_inmueble_entity_1 = require("../../entities/dueno-inmueble/dueno-inmueble.entity");
const dueno_inmueble_service_1 = require("../../services/dueno-inmueble/dueno-inmueble.service");
const dueno_inmueble_controller_1 = require("../../controllers/dueno-inmueble/dueno-inmueble.controller");
let DuenoInmuebleModule = class DuenoInmuebleModule {
};
DuenoInmuebleModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([dueno_inmueble_entity_1.DuenoInmueble])],
        providers: [dueno_inmueble_service_1.DuenoInmuebleService],
        controllers: [dueno_inmueble_controller_1.DuenoInmuebleController]
    })
], DuenoInmuebleModule);
exports.DuenoInmuebleModule = DuenoInmuebleModule;
//# sourceMappingURL=dueno-inmueble.module.js.map