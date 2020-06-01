import { Contrato } from "../../entities/contrato/contrato.entity";
import { Repository } from "typeorm";
export declare class ContratosService {
    private ContratoRepository;
    constructor(ContratoRepository: Repository<Contrato>);
    getContratoInmueble(IdInmueble: any): Promise<object>;
    getContratoCliente(IdCliente: any): Promise<object[]>;
    createContrato(contratoData: Contrato): Promise<object>;
}
