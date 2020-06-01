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
const dueno_inmueble_entity_1 = require("../dueno-inmueble/dueno-inmueble.entity");
let EstatusDueno = class EstatusDueno {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EstatusDueno.prototype, "id_estatus_dueno", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], EstatusDueno.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany(type => dueno_inmueble_entity_1.DuenoInmueble, duenoInmueble => duenoInmueble.id_estatus_dueno),
    __metadata("design:type", Array)
], EstatusDueno.prototype, "duenoInmueble", void 0);
EstatusDueno = __decorate([
    typeorm_1.Entity('estatus_dueno')
], EstatusDueno);
exports.EstatusDueno = EstatusDueno;
//# sourceMappingURL=estatus-dueno.entity.js.map