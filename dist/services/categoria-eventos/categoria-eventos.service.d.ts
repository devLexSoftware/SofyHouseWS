import { CategoriaEvento } from "../../entities/categorias-eventos/categorias-eventos.entity";
import { Repository } from "typeorm";
export declare class CategoriaEventosService {
    private categoriaeventoRepository;
    constructor(categoriaeventoRepository: Repository<CategoriaEvento>);
    getAllQuotations(idProblem: number): Promise<CategoriaEvento[]>;
}
