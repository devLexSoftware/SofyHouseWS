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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const evento_entity_1 = require("../evento/evento.entity");
const problemas_eventos_entity_1 = require("../problemas-eventos/problemas-eventos.entity");
let CategoriaEvento = class CategoriaEvento {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CategoriaEvento.prototype, "id_categoria_evento", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], CategoriaEvento.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => problemas_eventos_entity_1.ProblemaEvento, problemaEvento => problemaEvento.CategoriasEventos),
    typeorm_1.JoinColumn({ name: 'id_problema_evento' }),
    __metadata("design:type", problemas_eventos_entity_1.ProblemaEvento)
], CategoriaEvento.prototype, "id_problema_evento", void 0);
__decorate([
    typeorm_1.OneToMany(type => evento_entity_1.Evento, eventos => eventos.id_categoria_evento),
    __metadata("design:type", Array)
], CategoriaEvento.prototype, "eventos", void 0);
CategoriaEvento = __decorate([
    typeorm_1.Entity('categorias_eventos')
], CategoriaEvento);
exports.CategoriaEvento = CategoriaEvento;
//# sourceMappingURL=categorias-eventos.entity.js.map