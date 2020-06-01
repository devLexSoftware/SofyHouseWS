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
const cotizaciones_entity_1 = require("../cotizaciones/cotizaciones.entity");
let Proveedor = class Proveedor {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Proveedor.prototype, "id_proveedor", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Proveedor.prototype, "nombres", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Proveedor.prototype, "apellidos", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Proveedor.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Proveedor.prototype, "password", void 0);
__decorate([
    typeorm_1.Column('blob', { nullable: true, default: null }),
    __metadata("design:type", String)
], Proveedor.prototype, "foto_perfil", void 0);
__decorate([
    typeorm_1.OneToMany(type => evento_entity_1.Evento, eventos => eventos.id_proveedor),
    __metadata("design:type", Array)
], Proveedor.prototype, "eventos", void 0);
__decorate([
    typeorm_1.OneToMany(type => cotizaciones_entity_1.Cotizacion, cotizacion => cotizacion.id_proveedor),
    __metadata("design:type", Array)
], Proveedor.prototype, "cotizaciones", void 0);
Proveedor = __decorate([
    typeorm_1.Entity('proveedores')
], Proveedor);
exports.Proveedor = Proveedor;
//# sourceMappingURL=proveedores.entity.js.map