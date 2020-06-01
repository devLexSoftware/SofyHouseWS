import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from '../../entities/contrato/contrato.entity';
import { ContratosService } from '../../services/contratos/contratos.service';
import { ContratosController } from 'src/controllers/contratos/contratos.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Contrato])],
    providers:[ContratosService],
    controllers:[ContratosController] 
})
export class ContratosModule {}
