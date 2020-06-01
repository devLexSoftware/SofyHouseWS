import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Inmueble } from "../../entities/inmuebles/inmuebles.entity";
import { Repository, createQueryBuilder } from "typeorm";
import { isNullOrUndefined } from "util";

@Injectable()
export class InmuebleService {
  constructor(
    @InjectRepository(Inmueble) private InmuebleRepository: Repository<Inmueble>
  ) { }

  async getAllProperties(): Promise<Inmueble[]> {
    const inmuebles: Inmueble[] = await this.InmuebleRepository.find({
      relations: ["id_ciudad", "id_ciudad.id_estado", 'id_zona']
    });

    inmuebles.forEach(element => {
      if (isNullOrUndefined(element.foto_principal) == false) {
        const buf = Buffer.from(element.foto_principal, "binary");
        // eslint-disable-next-line @typescript-eslint/camelcase
        element.foto_principal = buf.toString("base64");
      }
    });
    return inmuebles;
  }

  async getPropertyByIDProp(propietario): Promise<Inmueble[]> {
    const propietarioId = parseInt(propietario);
    const inmuebles: Inmueble[] = await this.InmuebleRepository.find({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_dueno_inmueble: propietarioId }],
      relations: ["id_ciudad", "id_ciudad.id_estado"]
    });

    inmuebles.forEach(element => {
      if (isNullOrUndefined(element.foto_principal) == false) {
        const buf = Buffer.from(element.foto_principal, "binary");
        // eslint-disable-next-line @typescript-eslint/camelcase
        element.foto_principal = buf.toString("base64");
      }
    });
    return inmuebles;
  }

  async getPropertyByID(propertyId: string): Promise<Inmueble> {
    const InmuebleId = parseInt(propertyId);
    const inmueble: Inmueble = await this.InmuebleRepository.findOne({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_inmueble: InmuebleId }],
      relations: [
        "id_ciudad",
        "id_ciudad.id_estado",
        "imagenesInmueble",
        "eventos",
        "eventos.id_categoria_evento",
        "eventos.id_categoria_evento.id_problema_evento"
      ]
    });

    let buf
    if (!isNullOrUndefined(inmueble.foto_principal)) {
      buf = Buffer.from(inmueble.foto_principal, "binary");
      // eslint-disable-next-line @typescript-eslint/camelcase
      inmueble.foto_principal = buf.toString("base64");

      inmueble.imagenesInmueble.forEach(element => {

        const buf = Buffer.from(element.foto, "binary");
        element.foto = buf.toString("base64");
      });
    }
    return inmueble;
  }

  async createInmueble(inmuebleData: Inmueble): Promise<object> {
    try {

      console.log('Inmueble Agregado');
      // eslint-disable-next-line @typescript-eslint/camelcase
      const buff = new Buffer(inmuebleData.foto_principal, 'base64');
      
      // eslint-disable-next-line @typescript-eslint/camelcase
      inmuebleData.foto_principal = buff;
      // eslint-disable-next-line @typescript-eslint/camelcase
      const res = this.InmuebleRepository.create(inmuebleData);
      const propiertyDT = await this.InmuebleRepository.save(res);
      console.log('Inmueble Agregado');

      // delete userData["password"];
      return propiertyDT.id_inmueble
        ? {
          status: "success",
          message: "Inmueble Registrado Correctamente",
          id: propiertyDT.id_inmueble
        }
        : {
          status: "error",
          message:
            "Ocurrió un error al registrar el inmueble, intentelo de nuevo."
        };
    } catch (error) {
      console.log("ERROR===>", error);
      if (error.code == "ER_DUP_ENTRY")
        return {
          status: "error",
          message: "Ocurrió un error al registrar el inmueble, intentelo de nuevo."
        };
    }
  }
}
