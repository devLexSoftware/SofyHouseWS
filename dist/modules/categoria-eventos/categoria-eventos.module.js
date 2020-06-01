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
const categorias_eventos_entity_1 = require("../../entities/categorias-eventos/categorias-eventos.entity");
const categoria_eventos_service_1 = require("../../services/categoria-eventos/categoria-eventos.service");
const categoria_eventos_controller_1 = require("../../controllers/categoria-eventos/categoria-eventos.controller");
let CategoriaEventosModule = class CategoriaEventosModule {
};
CategoriaEventosModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([categorias_eventos_entity_1.CategoriaEvento])],
        providers: [categoria_eventos_service_1.CategoriaEventosService],
        controllers: [categoria_eventos_controller_1.CategoriaEventosController]
    })
], CategoriaEventosModule);
exports.CategoriaEventosModule = CategoriaEventosModule;
//# sourceMappingURL=categoria-eventos.module.js.map