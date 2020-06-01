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
const problemas_eventos_entity_1 = require("../../entities/problemas-eventos/problemas-eventos.entity");
const problemas_eventos_service_1 = require("../../services/problemas-eventos/problemas-eventos.service");
const problemas_eventos_controller_1 = require("../../controllers/problemas-eventos/problemas-eventos.controller");
let ProblemasEventosModule = class ProblemasEventosModule {
};
ProblemasEventosModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([problemas_eventos_entity_1.ProblemaEvento])],
        providers: [problemas_eventos_service_1.ProblemasEventosService],
        controllers: [problemas_eventos_controller_1.ProblemasEventosController]
    })
], ProblemasEventosModule);
exports.ProblemasEventosModule = ProblemasEventosModule;
//# sourceMappingURL=problemas-eventos.module.js.map