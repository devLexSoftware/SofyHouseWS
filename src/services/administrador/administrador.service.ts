import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Administrador } from "../../entities/administrador/administrador.entity";
import { Repository } from "typeorm";
import { isNullOrUndefined } from "util";

@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private admonRepository: Repository<Administrador>
  ) { }

  async createUser(userData: Administrador): Promise<object> {
    try {
      const buff = new Buffer(userData.foto_perfil, 'base64');
      // eslint-disable-next-line @typescript-eslint/camelcase
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
          message:
            "Ocurrió un error al registrar el usuario, intentelo de nuevo."
        };
    } catch (error) {
      console.log("ERROR===>", error);
      if (error.code == "ER_DUP_ENTRY")
        return {
          status: "error",
          message: "El correo ya se encuentra registrado en el sistema."
        };
    }
  }

  async createUserClient(userData: Administrador): Promise<object> {
    try {

      const buff = new Buffer(userData.foto_perfil, 'base64');
      // eslint-disable-next-line @typescript-eslint/camelcase
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
          message:
            "Ocurrió un error al registrar el usuario, intentelo de nuevo."
        };
    } catch (error) {
      console.log("ERROR===>", error);
      if (error.code == "ER_DUP_ENTRY")
        return {
          status: "error",
          message: "El usuario ya se encuentra registrado en el sistema."
        };
    }
  }

  async loginWithEmail(userData: Administrador): Promise<object> {

    const user: Administrador = await this.admonRepository.findOne({
      where: [{ correo: userData.correo }],
      relations: [
        "tipo_id",
      ]
    });

    if (user) {
      if (
        user.password == Administrador.prototype.hashPassword(userData.password)
      ) {
        delete user["password"];

        delete user["fecha_creacion"];
        const buf = Buffer.from(user.foto_perfil, "binary");
        // eslint-disable-next-line @typescript-eslint/camelcase 
        user.foto_perfil = buf.toString("base64");
        return {
          status: "success",
          data: user
        };
      } else {
        return {
          status: "error",
          message: "La contraseña no es correcta, inténtelo nuevamente."
        };
      }
    } else {
      return {
        status: "error",
        message:
          "Su cuenta no existe, es necesario que cree una nueva cuenta para ingresar."
      };
    }
  }

  async getAdmonPictureByEmail(emailAdmonUser: string): Promise<object> {
    const user: Administrador = await this.admonRepository.findOne({
      where: [{ correo: emailAdmonUser }]
    });
    if (user) {
      const buf = Buffer.from(user.foto_perfil, "binary");
      return {
        status: "success",
        correo: user.correo,
        // eslint-disable-next-line @typescript-eslint/camelcase
        foto_perfil: buf.toString("base64")
      };
    } else {
      return {
        status: "error",
        message: "No existe usuario registrado con ese correo"
      };
    }
  }
  async getAdmonPictureById(iduser: string): Promise<object> {
    const user: Administrador = await this.admonRepository.findOne({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_administrador: iduser }]
    });
    if (user) {
      if (!isNullOrUndefined(user.foto_perfil)) {
        const buf = Buffer.from(user.foto_perfil, "binary");
        // eslint-disable-next-line @typescript-eslint/camelcase
        user.foto_perfil = buf.toString("base64")
      }

      return {
        status: "success",
        nombre: user.nombres,
        apellido: user.apellidos,
        foto: user.foto_perfil,
      };
    } else {
      return {
        status: "error",
        message: "No existe usuario registrado con ese correo"
      };
    }
  }
  async getStatesList(TipoUsuario) {
    const users = await this.admonRepository.find(
      // eslint-disable-next-line @typescript-eslint/camelcase
      { where: [{ tipo_id: TipoUsuario }] }

    );
    users.forEach((element) => {
      delete element["password"];
      delete element["fecha_creacion"];
      delete element["foto_perfil"];
      delete element["correo"];
    })
    return users;
  }
}
