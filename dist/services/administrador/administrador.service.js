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
const typeorm_1 = require("@nestjs/typeorm");
const administrador_entity_1 = require("../../entities/administrador/administrador.entity");
const typeorm_2 = require("typeorm");
const util_1 = require("util");
let AdministradorService = class AdministradorService {
    constructor(admonRepository) {
        this.admonRepository = admonRepository;
    }
    async createUser(userData) {
        try {
            const buff = new Buffer(userData.foto_perfil, 'base64');
            userData.foto_perfil = buff;
            const res = this.admonRepository.create(userData);
            const usr = await this.admonRepository.save(res);
            delete userData["password"];
            return usr.id_administrador
                ? {
                    status: "success",
                    message: "Cliente creado correctamente",
                    data: userData
                }
                : {
                    status: "error",
                    message: "Ocurrió un error al registrar el usuario, intentelo de nuevo."
                };
        }
        catch (error) {
            console.log("ERROR===>", error);
            if (error.code == "ER_DUP_ENTRY")
                return {
                    status: "error",
                    message: "El correo ya se encuentra registrado en el sistema."
                };
        }
    }
    async createUserClient(userData) {
        try {
            const buff = new Buffer(userData.foto_perfil, 'base64');
            userData.foto_perfil = buff;
            const res = this.admonRepository.create(userData);
            const usr = await this.admonRepository.save(res);
            delete userData["password"];
            return usr.id_administrador
                ? {
                    status: "success",
                    message: "Usuario creado correctamente",
                    IdClient: usr.id_administrador
                }
                : {
                    status: "error",
                    message: "Ocurrió un error al registrar el usuario, intentelo de nuevo."
                };
        }
        catch (error) {
            console.log("ERROR===>", error);
            if (error.code == "ER_DUP_ENTRY")
                return {
                    status: "error",
                    message: "El usuario ya se encuentra registrado en el sistema."
                };
        }
    }
    async loginWithEmail(userData) {
        const user = await this.admonRepository.findOne({
            where: [{ correo: userData.correo }],
            relations: [
                "tipo_id",
            ]
        });
        if (user) {
            if (user.password == administrador_entity_1.Administrador.prototype.hashPassword(userData.password)) {
                delete user["password"];
                delete user["fecha_creacion"];
                const buf = Buffer.from(user.foto_perfil, "binary");
                user.foto_perfil = buf.toString("base64");
                return {
                    status: "success",
                    data: user
                };
            }
            else {
                return {
                    status: "error",
                    message: "La contraseña no es correcta, inténtelo nuevamente."
                };
            }
        }
        else {
            return {
                status: "error",
                message: "Su cuenta no existe, es necesario que cree una nueva cuenta para ingresar."
            };
        }
    }
    async getAdmonPictureByEmail(emailAdmonUser) {
        const user = await this.admonRepository.findOne({
            where: [{ correo: emailAdmonUser }]
        });
        if (user) {
            const buf = Buffer.from(user.foto_perfil, "binary");
            return {
                status: "success",
                correo: user.correo,
                foto_perfil: buf.toString("base64")
            };
        }
        else {
            return {
                status: "error",
                message: "No existe usuario registrado con ese correo"
            };
        }
    }
    async getAdmonPictureById(iduser) {
        const user = await this.admonRepository.findOne({
            where: [{ id_administrador: iduser }]
        });
        if (user) {
            if (!util_1.isNullOrUndefined(user.foto_perfil)) {
                const buf = Buffer.from(user.foto_perfil, "binary");
                user.foto_perfil = buf.toString("base64");
            }
            return {
                status: "success",
                nombre: user.nombres,
                apellido: user.apellidos,
                foto: user.foto_perfil,
            };
        }
        else {
            return {
                status: "error",
                message: "No existe usuario registrado con ese correo"
            };
        }
    }
    async getStatesList(TipoUsuario) {
        const users = await this.admonRepository.find({ where: [{ tipo_id: TipoUsuario }] });
        users.forEach((element) => {
            delete element["password"];
            delete element["fecha_creacion"];
            delete element["foto_perfil"];
            delete element["correo"];
        });
        return users;
    }
};
AdministradorService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(administrador_entity_1.Administrador)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdministradorService);
exports.AdministradorService = AdministradorService;
//# sourceMappingURL=administrador.service.js.map