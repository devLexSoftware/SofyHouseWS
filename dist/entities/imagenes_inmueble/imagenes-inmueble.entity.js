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
let ImagenesInmueble = class ImagenesInmueble {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ImagenesInmueble.prototype, "id_imagen", void 0);
__decorate([
    typeorm_1.ManyToOne(type => inmuebles_entity_1.Inmueble, inmueble => inmueble.imagenesInmueble),
    typeorm_1.JoinColumn({ name: "id_inmueble" }),
    __metadata("design:type", inmuebles_entity_1.Inmueble)
], ImagenesInmueble.prototype, "id_inmueble", void 0);
__decorate([
    typeorm_1.Column("blob", { nullable: true, default: null }),
    __metadata("design:type", Object)
], ImagenesInmueble.prototype, "foto", void 0);
ImagenesInmueble = __decorate([
    typeorm_1.Entity("imagenes_inmueble")
], ImagenesInmueble);
exports.ImagenesInmueble = ImagenesInmueble;
//# sourceMappingURL=imagenes-inmueble.entity.js.map