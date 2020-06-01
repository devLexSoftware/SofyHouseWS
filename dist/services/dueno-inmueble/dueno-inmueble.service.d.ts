import { DuenoInmueble } from '../../entities/dueno-inmueble/dueno-inmueble.entity';
import { Repository } from 'typeorm';
export declare class DuenoInmuebleService {
    private duenoRepository;
    constructor(duenoRepository: Repository<DuenoInmueble>);
    getStatesList(): Promise<DuenoInmueble[]>;
}
