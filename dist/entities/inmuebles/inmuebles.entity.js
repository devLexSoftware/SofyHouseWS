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
const ciudades_entity_1 = require("../ciudades/ciudades.entity");
const evento_entity_1 = require("../evento/evento.entity");
const zonas_entity_1 = require("../zonas/zonas.entity");
const inmueble_con_servicios_entity_1 = require("../inmueble-con-servicios/inmueble-con-servicios.entity");
const dueno_inmueble_entity_1 = require("../dueno-inmueble/dueno-inmueble.entity");
const imagenes_inmueble_entity_1 = require("../imagenes_inmueble/imagenes-inmueble.entity");
let Inmueble = class Inmueble {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Inmueble.prototype, "id_inmueble", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Inmueble.prototype, "calle", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 10, nullable: true, default: null }),
    __metadata("design:type", String)
], Inmueble.prototype, "numero_interior", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 10, nullable: true, default: null }),
    __metadata("design:type", String)
], Inmueble.prototype, "numero_exterior", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Inmueble.prototype, "colonia", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 6, nullable: true, default: null }),
    __metadata("design:type", String)
], Inmueble.prototype, "codigo_postal", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 10, nullable: true, default: null }),
    __metadata("design:type", String)
], Inmueble.prototype, "precio", void 0);
__decorate([
    typeorm_1.Column("double", { nullable: true, default: null }),
    __metadata("design:type", Number)
], Inmueble.prototype, "latitud", void 0);
__decorate([
    typeorm_1.Column("double", { nullable: true, default: null }),
    __metadata("design:type", Number)
], Inmueble.prototype, "longitud", void 0);
__decorate([
    typeorm_1.Column("blob", { nullable: true, default: null }),
    __metadata("design:type", Object)
], Inmueble.prototype, "foto_principal", void 0);
__decorate([
    typeorm_1.ManyToOne(type => zonas_entity_1.Zona, zona => zona.inmuebles),
    typeorm_1.JoinColumn({ name: "id_zona" }),
    __metadata("design:type", zonas_entity_1.Zona)
], Inmueble.prototype, "id_zona", void 0);
__decorate([
    typeorm_1.ManyToOne(type => ciudades_entity_1.Ciudades, ciudad => ciudad.inmuebles),
    typeorm_1.JoinColumn({ name: "id_ciudad" }),
    __metadata("design:type", ciudades_entity_1.Ciudades)
], Inmueble.prototype, "id_ciudad", void 0);
__decorate([
    typeorm_1.ManyToOne(type => dueno_inmueble_entity_1.DuenoInmueble, duenoInmueble => duenoInmueble.inmuebles),
    typeorm_1.JoinColumn({ name: "id_dueno_inmueble" }),
    __metadata("design:type", dueno_inmueble_entity_1.DuenoInmueble)
], Inmueble.prototype, "id_dueno_inmueble", void 0);
__decorate([
    typeorm_1.OneToMany(type => evento_entity_1.Evento, eventos => eventos.id_inmueble),
    __metadata("design:type", Array)
], Inmueble.prototype, "eventos", void 0);
__decorate([
    typeorm_1.OneToMany(type => inmueble_con_servicios_entity_1.InmuebleConServicio, inmConServicio => inmConServicio.id_inmueble),
    __metadata("design:type", Array)
], Inmueble.prototype, "inmuebleConServicio", void 0);
__decorate([
    typeorm_1.OneToMany(type => imagenes_inmueble_entity_1.ImagenesInmueble, imgInmueble => imgInmueble.id_inmueble),
    __metadata("design:type", Array)
], Inmueble.prototype, "imagenesInmueble", void 0);
Inmueble = __decorate([
    typeorm_1.Entity()
], Inmueble);
exports.Inmueble = Inmueble;
//# sourceMappingURL=inmuebles.entity.js.map