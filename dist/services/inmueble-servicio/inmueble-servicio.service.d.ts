import { InmuebleConServicio } from "../../entities/inmueble-con-servicios/inmueble-con-servicios.entity";
import { Repository } from "typeorm";
export declare class InmuebleServicioService {
    private propertyReceiptRepository;
    constructor(propertyReceiptRepository: Repository<InmuebleConServicio>);
    getPropertyReceiptsByID(propertyId: string): Promise<InmuebleConServicio[]>;
}
