import { ProblemaEvento } from '../../entities/problemas-eventos/problemas-eventos.entity';
import { Repository } from 'typeorm';
export declare class ProblemasEventosService {
    private problemaRepository;
    constructor(problemaRepository: Repository<ProblemaEvento>);
    getAllQuotations(): Promise<ProblemaEvento[]>;
}
