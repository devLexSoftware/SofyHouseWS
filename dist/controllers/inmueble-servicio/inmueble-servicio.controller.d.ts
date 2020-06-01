import { InmuebleConServicio } from "../../entities/inmueble-con-servicios/inmueble-con-servicios.entity";
import { InmuebleServicioService } from "../../services/inmueble-servicio/inmueble-servicio.service";
export declare class InmuebleServicioController {
    private receiptService;
    constructor(receiptService: InmuebleServicioService);
    getPropertyById(propertyId: string): Promise<InmuebleConServicio[]>;
}
