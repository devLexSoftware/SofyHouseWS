import { Controller, Get, Param } from "@nestjs/common";
import { InmuebleConServicio } from "../../entities/inmueble-con-servicios/inmueble-con-servicios.entity";
import { InmuebleServicioService } from "../../services/inmueble-servicio/inmueble-servicio.service";

@Controller("inmueble-servicio")
export class InmuebleServicioController {
  constructor(private receiptService: InmuebleServicioService) {}

  @Get(":id")
  async getPropertyById(@Param("id") propertyId: string): Promise<InmuebleConServicio[]> {
    return await this.receiptService.getPropertyReceiptsByID(propertyId);
  }
}
