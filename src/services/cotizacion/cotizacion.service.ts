import { Injectable } from "@nestjs/common";
import { Cotizacion } from "../../entities/cotizaciones/cotizaciones.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { isNullOrUndefined } from "util";

@Injectable()
export class CotizacionService {
  constructor(
    @InjectRepository(Cotizacion) private cotizacionRepository: Repository<Cotizacion>
  ) { }

  async getPropertyByID(quotarionId): Promise<Cotizacion> {
    const cotizacion: Cotizacion = await this.cotizacionRepository.findOne({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_cotizacion: quotarionId }],
      relations: [
        "id_estatus_evento",
        'id_evento',
        "id_evento.id_categoria_evento",
        "id_evento.id_categoria_evento.id_problema_evento",
        "id_evento.id_estatus_evento"
      ]

    });

    if (!isNullOrUndefined(cotizacion.evidencia)) {
      const buf = Buffer.from(cotizacion.evidencia, "binary");
      cotizacion.evidencia = buf.toString("base64");
    }
    return cotizacion
  }

  async getAllQuotations(): Promise<Cotizacion[]> {
    return await this.cotizacionRepository.find({
      relations: [
        "id_estatus_evento",
        "id_evento",
        "id_evento.id_categoria_evento",
        "id_evento.id_categoria_evento.id_problema_evento",
        "id_evento.id_estatus_evento"
      ]
    });
  }
  async  createContizacion(cotizacionData: Cotizacion): Promise<object> {
    try {

      if(!isNullOrUndefined(cotizacionData.evidencia)){
        const buff = new Buffer(cotizacionData.evidencia, 'base64');
        // eslint-disable-next-line @typescript-eslint/camelcase
        cotizacionData.evidencia = buff;
    }
    console.log(cotizacionData);
      const res = this.cotizacionRepository.create(cotizacionData);
      const CotizacionDT = await this.cotizacionRepository.save(res);

      // delete userData["password"];
      return CotizacionDT.id_cotizacion
        ? {
          status: "success",
          message: "Cotización Registrada Correctamente",

        }
        : {
          status: "error",
          message:
            "Ocurrió un error al registrar la cotización, intentelo de nuevo."
        };
    } catch (error) {
      console.log("ERROR===>", error);
      if (error.code == "ER_DUP_ENTRY")
        return {
          status: "error",
          message: "Ocurrió un error al registrar la cotización, intentelo de nuevo."
        };
    }

  }


  async updateQuotStatus(dataToUpdate: any): Promise<any> {
    const res = await this.cotizacionRepository.findOne({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_cotizacion: dataToUpdate.id_evento }]
    });
    console.log(res);
    return await this.cotizacionRepository.update(
      // eslint-disable-next-line @typescript-eslint/camelcase
      { id_cotizacion: dataToUpdate.id_evento },
      // eslint-disable-next-line @typescript-eslint/camelcase
      { id_estatus_evento: dataToUpdate.estatus_evento }
    );
  }
}
