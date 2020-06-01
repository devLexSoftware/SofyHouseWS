import { ZonasService } from '../../services/zonas/zonas.service';
import { Zona } from '../../entities/zonas/zonas.entity';
export declare class ZonaController {
    private zonasSrv;
    constructor(zonasSrv: ZonasService);
    getStatesList(): Promise<Zona[]>;
}
