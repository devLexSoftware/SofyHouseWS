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
const inmuebles_entity_1 = require("../inmuebles/inmuebles.entity");
let Contrato = class Contrato {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Contrato.prototype, "id_contrato", void 0);
__decorate([
    typeorm_1.Column("date", { nullable: true }),
    __metadata("design:type", Date)
], Contrato.prototype, "fecha_inicio", void 0);
__decorate([
    typeorm_1.Column("date", { nullable: true }),
    __metadata("design:type", Date)
], Contrato.prototype, "fecha_fin", void 0);
__decorate([
    typeorm_1.Column("varchar", { nullable: true }),
    __metadata("design:type", String)
], Contrato.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column("mediumblob", { nullable: true }),
    __metadata("design:type", Object)
], Contrato.prototype, "ine", void 0);
__decorate([
    typeorm_1.Column("mediumblob", { nullable: true }),
    __metadata("design:type", Object)
], Contrato.prototype, "contrato", void 0);
__decorate([
    typeorm_1.Column("numeric", { nullable: true }),
    __metadata("design:type", Object)
], Contrato.prototype, "id_dueno", void 0);
__decorate([
    typeorm_1.Column("numeric", { nullable: true }),
    __metadata("design:type", Object)
], Contrato.prototype, "id_cliente", void 0);
__decorate([
    typeorm_1.OneToOne(type => inmuebles_entity_1.Inmueble, inmueble => inmueble.id_inmueble),
    typeorm_1.JoinColumn({ name: "id_inmueble" }),
    __metadata("design:type", inmuebles_entity_1.Inmueble)
], Contrato.prototype, "id_inmueble", void 0);
Contrato = __decorate([
    typeorm_1.Entity("contrato_inmueble")
], Contrato);
exports.Contrato = Contrato;
//# sourceMappingURL=contrato.entity.js.map