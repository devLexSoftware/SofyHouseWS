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
const estatus_dueno_entity_1 = require("../estatus-dueno/estatus-dueno.entity");
const typeorm_1 = require("typeorm");
const inmuebles_entity_1 = require("../inmuebles/inmuebles.entity");
let DuenoInmueble = class DuenoInmueble {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DuenoInmueble.prototype, "id_dueno", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], DuenoInmueble.prototype, "nombres", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], DuenoInmueble.prototype, "apellidos", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], DuenoInmueble.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], DuenoInmueble.prototype, "password", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], DuenoInmueble.prototype, "fecha_creacion", void 0);
__decorate([
    typeorm_1.Column('blob', { nullable: true, default: null }),
    __metadata("design:type", String)
], DuenoInmueble.prototype, "foto_perfil", void 0);
__decorate([
    typeorm_1.ManyToOne(type => estatus_dueno_entity_1.EstatusDueno, estatusDueno => estatusDueno.duenoInmueble),
    typeorm_1.JoinColumn({ name: 'id_estatus_dueno' }),
    __metadata("design:type", estatus_dueno_entity_1.EstatusDueno)
], DuenoInmueble.prototype, "id_estatus_dueno", void 0);
__decorate([
    typeorm_1.OneToMany(type => inmuebles_entity_1.Inmueble, inmueble => inmueble.id_dueno_inmueble),
    __metadata("design:type", Array)
], DuenoInmueble.prototype, "inmuebles", void 0);
DuenoInmueble = __decorate([
    typeorm_1.Entity()
], DuenoInmueble);
exports.DuenoInmueble = DuenoInmueble;
//# sourceMappingURL=dueno-inmueble.entity.js.map