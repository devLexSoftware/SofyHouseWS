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
const estatus_eventos_entity_1 = require("../estatus-eventos/estatus-eventos.entity");
const evento_entity_1 = require("../evento/evento.entity");
let Cotizacion = class Cotizacion {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Cotizacion.prototype, "id_cotizacion", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Cotizacion.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 12, scale: 2, nullable: true, default: null }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "precio", void 0);
__decorate([
    typeorm_1.Column('mediumblob', { nullable: true, default: null }),
    __metadata("design:type", Object)
], Cotizacion.prototype, "evidencia", void 0);
__decorate([
    typeorm_1.Column('decimal', { nullable: true, default: null }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "id_proveedor", void 0);
__decorate([
    typeorm_1.ManyToOne(type => estatus_eventos_entity_1.EstatusEvento, estatusEvento => estatusEvento.eventos),
    typeorm_1.JoinColumn({ name: "id_estatus_evento" }),
    __metadata("design:type", estatus_eventos_entity_1.EstatusEvento)
], Cotizacion.prototype, "id_estatus_evento", void 0);
__decorate([
    typeorm_1.OneToOne(type => evento_entity_1.Evento),
    typeorm_1.JoinColumn({ name: "id_evento" }),
    __metadata("design:type", evento_entity_1.Evento)
], Cotizacion.prototype, "id_evento", void 0);
Cotizacion = __decorate([
    typeorm_1.Entity()
], Cotizacion);
exports.Cotizacion = Cotizacion;
//# sourceMappingURL=cotizaciones.entity.js.map