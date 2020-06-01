import { ProblemasEventosService } from '../../services/problemas-eventos/problemas-eventos.service';
import { ProblemaEvento } from '../../entities/problemas-eventos/problemas-eventos.entity';
export declare class ProblemasEventosController {
    private problema;
    constructor(problema: ProblemasEventosService);
    getAllQuotations(): Promise<ProblemaEvento[]>;
}
