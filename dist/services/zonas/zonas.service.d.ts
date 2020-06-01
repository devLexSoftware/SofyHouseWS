import { Zona } from '../../entities/zonas/zonas.entity';
import { Repository } from 'typeorm';
export declare class ZonasService {
    private zonasRepository;
    constructor(zonasRepository: Repository<Zona>);
    getStatesList(): Promise<Zona[]>;
}
