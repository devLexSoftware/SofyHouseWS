import { CategoriaEventosService } from '../../services/categoria-eventos/categoria-eventos.service';
import { CategoriaEvento } from '../../entities/categorias-eventos/categorias-eventos.entity';
export declare class CategoriaEventosController {
    private categoria;
    constructor(categoria: CategoriaEventosService);
    getAllQuotations(idProblem: number): Promise<CategoriaEvento[]>;
}
