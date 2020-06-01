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
const servicios_entity_1 = require("../servicios/servicios.entity");
const inmuebles_entity_1 = require("../inmuebles/inmuebles.entity");
let InmuebleConServicio = class InmuebleConServicio {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InmuebleConServicio.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => servicios_entity_1.Servicio, servicio => servicio.inmuebleConServicio),
    typeorm_1.JoinColumn({ name: "id_servicio" }),
    __metadata("design:type", servicios_entity_1.Servicio)
], InmuebleConServicio.prototype, "id_servicio", void 0);
__decorate([
    typeorm_1.ManyToOne(type => inmuebles_entity_1.Inmueble, inmueble => inmueble.inmuebleConServicio),
    typeorm_1.JoinColumn({ name: "id_inmueble" }),
    __metadata("design:type", inmuebles_entity_1.Inmueble)
], InmuebleConServicio.prototype, "id_inmueble", void 0);
__decorate([
    typeorm_1.Column("mediumblob", { nullable: true, default: null }),
    __metadata("design:type", String)
], InmuebleConServicio.prototype, "evidencia", void 0);
__decorate([
    typeorm_1.Column("date", { nullable: true, default: null }),
    __metadata("design:type", Date)
], InmuebleConServicio.prototype, "fecha", void 0);
InmuebleConServicio = __decorate([
    typeorm_1.Entity("inmueble_con_servicios")
], InmuebleConServicio);
exports.InmuebleConServicio = InmuebleConServicio;
//# sourceMappingURL=inmueble-con-servicios.entity.js.map