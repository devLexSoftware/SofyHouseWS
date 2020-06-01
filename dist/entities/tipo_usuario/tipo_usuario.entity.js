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
const administrador_entity_1 = require("../../entities/administrador/administrador.entity");
let TipoUsuario = class TipoUsuario {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TipoUsuario.prototype, "tipo_id", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255 }),
    __metadata("design:type", String)
], TipoUsuario.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany(type => administrador_entity_1.Administrador, administrador => administrador.tipo_id),
    __metadata("design:type", Array)
], TipoUsuario.prototype, "administrador", void 0);
TipoUsuario = __decorate([
    typeorm_1.Entity("tipo_usuario")
], TipoUsuario);
exports.TipoUsuario = TipoUsuario;
//# sourceMappingURL=tipo_usuario.entity.js.map