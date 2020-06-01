import { Inmueble } from "../../entities/inmuebles/inmuebles.entity";
import { Repository } from "typeorm";
export declare class InmuebleService {
    private InmuebleRepository;
    constructor(InmuebleRepository: Repository<Inmueble>);
    getAllProperties(): Promise<Inmueble[]>;
    getPropertyByIDProp(propietario: any): Promise<Inmueble[]>;
    getPropertyByID(propertyId: string): Promise<Inmueble>;
    createInmueble(inmuebleData: Inmueble): Promise<object>;
}
