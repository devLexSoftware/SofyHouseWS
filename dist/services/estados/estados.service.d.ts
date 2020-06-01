import { Estados } from '../../entities/estados/estados.entity';
import { Repository } from 'typeorm';
export declare class EstadosService {
    private estadosRepository;
    constructor(estadosRepository: Repository<Estados>);
    getStatesList(): Promise<Estados[]>;
}
