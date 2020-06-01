import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEvento }   from '../../entities/categorias-eventos/categorias-eventos.entity';
import { CategoriaEventosService }from '../../services/categoria-eventos/categoria-eventos.service';
import { CategoriaEventosController }from '../../controllers/categoria-eventos/categoria-eventos.controller';

@Module({
    imports:[TypeOrmModule.forFeature([CategoriaEvento])],
    providers:[CategoriaEventosService],
    controllers:[CategoriaEventosController]
})
export class CategoriaEventosModule {}
