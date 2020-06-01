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
let Cliente = class Cliente {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Cliente.prototype, "id_cliente", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "nombres", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "apellidos", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "inicio_contrato", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "fin_contrato", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "usuario", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "password", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 45, nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column('blob', { nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "contrato", void 0);
__decorate([
    typeorm_1.Column('blob', { nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "INE", void 0);
__decorate([
    typeorm_1.Column('blob', { nullable: true, default: null }),
    __metadata("design:type", String)
], Cliente.prototype, "foto_perfil", void 0);
__decorate([
    typeorm_1.OneToMany(type => evento_entity_1.Evento, evento => evento.id_cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "eventos", void 0);
Cliente = __decorate([
    typeorm_1.Entity('cliente')
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.entity.js.map