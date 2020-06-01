import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemaEvento }   from '../../entities/problemas-eventos/problemas-eventos.entity';
import { ProblemasEventosService }from '../../services/problemas-eventos/problemas-eventos.service';
import { ProblemasEventosController }from '../../controllers/problemas-eventos/problemas-eventos.controller';

@Module({
    imports:[TypeOrmModule.forFeature([ProblemaEvento])],
    providers:[ProblemasEventosService],
    controllers:[ProblemasEventosController]
})
export class ProblemasEventosModule {}
