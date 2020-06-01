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
let Zona = class Zona {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Zona.prototype, "id_zona", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Zona.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany(type => inmuebles_entity_1.Inmueble, inmueble => inmueble.id_zona),
    __metadata("design:type", Array)
], Zona.prototype, "inmuebles", void 0);
Zona = __decorate([
    typeorm_1.Entity('zonas')
], Zona);
exports.Zona = Zona;
//# sourceMappingURL=zonas.entity.js.map