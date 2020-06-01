import { Ciudades } from "../../entities/ciudades/ciudades.entity";
import { CiudadesService } from '../../services/ciudades/ciudades.service';
export declare class CiudadesController {
    private citiesSrv;
    constructor(citiesSrv: CiudadesService);
    getCitiesByState(idState: number): Promise<Ciudades[]>;
}
