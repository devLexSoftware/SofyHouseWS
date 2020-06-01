import { DuenoInmuebleService } from '../../services/dueno-inmueble/dueno-inmueble.service';
import { DuenoInmueble } from 'src/entities/dueno-inmueble/dueno-inmueble.entity';
export declare class DuenoInmuebleController {
    private duenoSrv;
    constructor(duenoSrv: DuenoInmuebleService);
    getStatesList(): Promise<DuenoInmueble[]>;
}
