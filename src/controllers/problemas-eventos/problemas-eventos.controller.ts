import { Controller , Get } from '@nestjs/common';
import { ProblemasEventosService} from '../../services/problemas-eventos/problemas-eventos.service';
import { ProblemaEvento} from '../../entities/problemas-eventos/problemas-eventos.entity';
@Controller('problemas')
export class ProblemasEventosController {
    constructor(private problema:ProblemasEventosService){}

    @Get()
    async getAllQuotations():Promise<ProblemaEvento[]>{
        
        return await this.problema.getAllQuotations();
    }
}
