import { Injectable } from '@nestjs/common';
import { ProblemaEvento } from '../../entities/problemas-eventos/problemas-eventos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ProblemasEventosService {

    constructor(
        @InjectRepository(ProblemaEvento)
        private problemaRepository: Repository<ProblemaEvento>
    ) { }
    async getAllQuotations(): Promise<ProblemaEvento[]> {
        return await this.problemaRepository.find();
    }
}
