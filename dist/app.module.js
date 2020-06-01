"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const administrador_module_1 = require("./modules/administrador/administrador.module");
const inmueble_module_1 = require("./modules/inmueble/inmueble.module");
const eventos_module_1 = require("./modules/eventos/eventos.module");
const cotizaciones_module_1 = require("./modules/cotizaciones/cotizaciones.module");
const inmueble_servicio_module_1 = require("./modules/inmueble-servicio/inmueble-servicio.module");
const estados_module_1 = require("./modules/estados/estados.module");
const ciudades_module_1 = require("./modules/ciudades/ciudades.module");
const zonas_module_1 = require("./modules/zonas/zonas.module");
const categoria_eventos_module_1 = require("./modules/categoria-eventos/categoria-eventos.module");
const problemas_eventos_module_1 = require("./modules/problemas-eventos/problemas-eventos.module");
const dueno_inmueble_module_1 = require("./modules/dueno-inmueble/dueno-inmueble.module");
const contratos_module_1 = require("./modules/contratos/contratos.module");
const imagen_inmueble_module_1 = require("./modules/imagen-inmueble/imagen-inmueble.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot(),
            administrador_module_1.AdministradorModule,
            inmueble_module_1.InmuebleModule,
            eventos_module_1.EventosModule,
            cotizaciones_module_1.CotizacionesModule,
            inmueble_servicio_module_1.InmuebleServicioModule,
            estados_module_1.EstadosModule,
            ciudades_module_1.CiudadesModule,
            zonas_module_1.ZonasModule,
            categoria_eventos_module_1.CategoriaEventosModule,
            problemas_eventos_module_1.ProblemasEventosModule,
            dueno_inmueble_module_1.DuenoInmuebleModule,
            contratos_module_1.ContratosModule,
            imagen_inmueble_module_1.ImagenInmuebleModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map