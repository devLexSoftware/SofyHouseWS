import { EstadosService } from '../../services/estados/estados.service';
import { Estados } from 'src/entities/estados/estados.entity';
export declare class EstadosController {
    private estadosSrv;
    constructor(estadosSrv: EstadosService);
    getStatesList(): Promise<Estados[]>;
}
