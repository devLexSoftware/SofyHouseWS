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
const crypto = require("crypto");
const tipo_usuario_entity_1 = require("../tipo_usuario/tipo_usuario.entity");
let Administrador = class Administrador {
    hashPassword(password) {
        return crypto.createHmac("sha256", password).digest("hex");
    }
    BeforeInsertPassword() {
        if (this.password)
            this.password = this.hashPassword(this.password);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Administrador.prototype, "id_administrador", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 45 }),
    __metadata("design:type", String)
], Administrador.prototype, "nombres", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 45 }),
    __metadata("design:type", String)
], Administrador.prototype, "apellidos", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 45, unique: true }),
    __metadata("design:type", String)
], Administrador.prototype, "correo", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Administrador.prototype, "BeforeInsertPassword", null);
__decorate([
    typeorm_1.Column("varchar", { length: 255 }),
    __metadata("design:type", String)
], Administrador.prototype, "password", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Administrador.prototype, "fecha_creacion", void 0);
__decorate([
    typeorm_1.Column("blob", { nullable: true, default: null }),
    __metadata("design:type", Object)
], Administrador.prototype, "foto_perfil", void 0);
__decorate([
    typeorm_1.OneToOne(type => tipo_usuario_entity_1.TipoUsuario),
    typeorm_1.JoinColumn({ name: "tipo_id" }),
    __metadata("design:type", tipo_usuario_entity_1.TipoUsuario)
], Administrador.prototype, "tipo_id", void 0);
Administrador = __decorate([
    typeorm_1.Entity("administrador")
], Administrador);
exports.Administrador = Administrador;
//# sourceMappingURL=administrador.entity.js.map