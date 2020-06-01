import { InmuebleService } from "../../services/inmueble/inmueble.service";
import { Inmueble } from "../../entities/inmuebles/inmuebles.entity";
export declare class InmuebleController {
    private inmuebleService;
    constructor(inmuebleService: InmuebleService);
    getAllProperties(): Promise<Inmueble[]>;
    getPropertyById(propertyId: string): Promise<Inmueble>;
    getPropertyByIdProp(propertyId: string): Promise<Inmueble[]>;
    createInmueble(inmuebleData: Inmueble): Promise<object>;
}
