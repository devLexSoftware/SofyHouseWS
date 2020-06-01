import { Ciudades } from "../../entities/ciudades/ciudades.entity";
import { Repository } from "typeorm";
export declare class CiudadesService {
    private ciudadesRepository;
    constructor(ciudadesRepository: Repository<Ciudades>);
    getCitiesByState(idState: number): Promise<Ciudades[]>;
}
