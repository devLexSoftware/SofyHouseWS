import { Controller, Get, Param } from '@nestjs/common';
import { CategoriaEventosService}from '../../services/categoria-eventos/categoria-eventos.service'
import { CategoriaEvento } from '../../entities/categorias-eventos/categorias-eventos.entity';
@Controller('categoria-eventos')
export class CategoriaEventosController {
    constructor(private categoria:CategoriaEventosService){}

    @Get(':id_problema')
    async getAllQuotations(@Param("id_problema") idProblem: number):Promise<CategoriaEvento[]>{
        return await this.categoria.getAllQuotations(idProblem);
    }
}
