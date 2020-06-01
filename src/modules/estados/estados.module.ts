import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estados } from '../../entities/estados/estados.entity';
import { EstadosService } from '../../services/estados/estados.service';
import { EstadosController } from '../../controllers/estados/estados.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Estados])],
    providers:[EstadosService],
    controllers:[EstadosController]
})
export class EstadosModule {}
