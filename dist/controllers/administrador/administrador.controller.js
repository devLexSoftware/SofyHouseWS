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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const administrador_service_1 = require("../../services/administrador/administrador.service");
const administrador_entity_1 = require("../../entities/administrador/administrador.entity");
let AdministradorController = class AdministradorController {
    constructor(AdmonService) {
        this.AdmonService = AdmonService;
    }
    async createUser(userData) {
        return await this.AdmonService.createUser(userData);
    }
    async createUserCli(userData) {
        return await this.AdmonService.createUserClient(userData);
    }
    async loginWithEmail(userData) {
        return await this.AdmonService.loginWithEmail(userData);
    }
    async getAdmonPictureByEmail(emailAdmonUser) {
        return await this.AdmonService.getAdmonPictureByEmail(emailAdmonUser);
    }
    async getAdmonPictureById(emailAdmonUser) {
        return await this.AdmonService.getAdmonPictureById(emailAdmonUser);
    }
    async getStatesListProp() {
        return await this.AdmonService.getStatesList(2);
    }
    async getStatesListProv() {
        return await this.AdmonService.getStatesList(4);
    }
};
__decorate([
    common_1.Post("create_user"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [administrador_entity_1.Administrador]),
    __metadata("design:returntype", Promise)
], AdministradorController.prototype, "createUser", null);
__decorate([
    common_1.Post("create_user_client"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [administrador_entity_1.Administrador]),
    __metadata("design:returntype", Promise)
], AdministradorController.prototype, "createUserCli", null);
__decorate([
    common_1.Post("login"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [administrador_entity_1.Administrador]),
    __metadata("design:returntype", Promise)
], AdministradorController.prototype, "loginWithEmail", null);
__decorate([
    common_1.Get("get_picture_by_email/:email"),
    __param(0, common_1.Param("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdministradorController.prototype, "getAdmonPictureByEmail", null);
__decorate([
    common_1.Get("get_data_id/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdministradorController.prototype, "getAdmonPictureById", null);
__decorate([
    common_1.Get('get_all_props'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdministradorController.prototype, "getStatesListProp", null);
__decorate([
    common_1.Get('get_all_prov'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdministradorController.prototype, "getStatesListProv", null);
AdministradorController = __decorate([
    common_1.Controller("administrador"),
    __metadata("design:paramtypes", [administrador_service_1.AdministradorService])
], AdministradorController);
exports.AdministradorController = AdministradorController;
//# sourceMappingURL=administrador.controller.js.map