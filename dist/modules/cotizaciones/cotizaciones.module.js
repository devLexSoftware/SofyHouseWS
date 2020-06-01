"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cotizacion_service_1 = require("../../services/cotizacion/cotizacion.service");
const cotizaciones_controller_1 = require("../../controllers/cotizaciones/cotizaciones.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cotizaciones_entity_1 = require("../../entities/cotizaciones/cotizaciones.entity");
const evento_service_1 = require("../../services/evento/evento.service");
const evento_entity_1 = require("../../entities/evento/evento.entity");
let CotizacionesModule = class CotizacionesModule {
};
CotizacionesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([cotizaciones_entity_1.Cotizacion, evento_entity_1.Evento])],
        providers: [cotizacion_service_1.CotizacionService, evento_service_1.EventoService],
        controllers: [cotizaciones_controller_1.CotizacionesController]
    })
], CotizacionesModule);
exports.CotizacionesModule = CotizacionesModule;
//# sourceMappingURL=cotizaciones.module.js.map