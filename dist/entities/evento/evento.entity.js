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
const cliente_entity_1 = require("../cliente/cliente.entity");
const estatus_eventos_entity_1 = require("../estatus-eventos/estatus-eventos.entity");
const categorias_eventos_entity_1 = require("../categorias-eventos/categorias-eventos.entity");
const proveedores_entity_1 = require("../proveedores/proveedores.entity");
const inmuebles_entity_1 = require("../inmuebles/inmuebles.entity");
let Evento = class Evento {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Evento.prototype, "id_evento", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255, nullable: true, default: null }),
    __metadata("design:type", String)
], Evento.prototype, "descripcion_problema", void 0);
__decorate([
    typeorm_1.Column("datetime", { nullable: true, default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Evento.prototype, "fecha_creacion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cliente_entity_1.Cliente, cliente => cliente.eventos),
    typeorm_1.JoinColumn({ name: "id_cliente" }),
    __metadata("design:type", cliente_entity_1.Cliente)
], Evento.prototype, "id_cliente", void 0);
__decorate([
    typeorm_1.ManyToOne(type => categorias_eventos_entity_1.CategoriaEvento, categoriaEvento => categoriaEvento.eventos),
    typeorm_1.JoinColumn({ name: "id_categoria_evento" }),
    __metadata("design:type", categorias_eventos_entity_1.CategoriaEvento)
], Evento.prototype, "id_categoria_evento", void 0);
__decorate([
    typeorm_1.ManyToOne(type => estatus_eventos_entity_1.EstatusEvento, estatusEvento => estatusEvento.eventos),
    typeorm_1.JoinColumn({ name: "id_estatus_evento" }),
    __metadata("design:type", estatus_eventos_entity_1.EstatusEvento)
], Evento.prototype, "id_estatus_evento", void 0);
__decorate([
    typeorm_1.ManyToOne(type => proveedores_entity_1.Proveedor, proveedor => proveedor.eventos),
    typeorm_1.JoinColumn({ name: "id_proveedor" }),
    __metadata("design:type", proveedores_entity_1.Proveedor)
], Evento.prototype, "id_proveedor", void 0);
__decorate([
    typeorm_1.ManyToOne(type => inmuebles_entity_1.Inmueble, inmueble => inmueble.eventos),
    typeorm_1.JoinColumn({ name: "id_inmueble" }),
    __metadata("design:type", inmuebles_entity_1.Inmueble)
], Evento.prototype, "id_inmueble", void 0);
Evento = __decorate([
    typeorm_1.Entity("eventos")
], Evento);
exports.Evento = Evento;
//# sourceMappingURL=evento.entity.js.map