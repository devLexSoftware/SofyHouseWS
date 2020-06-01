import { ContratosService } from '../../services/contratos/contratos.service';
import { Contrato } from 'src/entities/contrato/contrato.entity';
export declare class ContratosController {
    private contratoServ;
    constructor(contratoServ: ContratosService);
    getContratoList(inmuebeId: string): Promise<object>;
    getContratoListCliente(clienteId: string): Promise<object[]>;
    createUserCli(contratoDta: Contrato): Promise<object>;
}
