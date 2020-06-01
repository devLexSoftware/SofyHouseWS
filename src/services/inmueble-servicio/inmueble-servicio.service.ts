import { Injectable } from "@nestjs/common";
import { InmuebleConServicio } from "../../entities/inmueble-con-servicios/inmueble-con-servicios.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class InmuebleServicioService {
  constructor(
    @InjectRepository(InmuebleConServicio)
    private propertyReceiptRepository: Repository<InmuebleConServicio>
  ) {}

  async getPropertyReceiptsByID(propertyId: string): Promise<InmuebleConServicio[]> {
    const InmuebleId = parseInt(propertyId);
    const receipts: InmuebleConServicio[] = await this.propertyReceiptRepository.find(
      {
        // eslint-disable-next-line @typescript-eslint/camelcase
        where: [{ id_inmueble: InmuebleId }],
        order: {
          fecha: "DESC"
        },
        relations: ["id_servicio", "id_inmueble"]
      }
    );
    receipts.forEach((elem, indx) => {
      if (elem.evidencia) {
        const buf = Buffer.from(elem.evidencia, "binary");
        elem.evidencia = buf.toString("base64");
      }
      for(let el = indx + 1; el < receipts.length; el++) {
        if (elem.id_inmueble.id_inmueble == receipts[el].id_inmueble.id_inmueble) {
          if (elem.id_servicio.id_servicio == receipts[el].id_servicio.id_servicio) {
            receipts.splice(el, 1);
          }
        }
      }
    });

    return receipts;
  }
}
