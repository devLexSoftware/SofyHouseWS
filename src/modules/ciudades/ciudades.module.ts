import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudades } from '../../entities/ciudades/ciudades.entity';
import { CiudadesService } from '../../services/ciudades/ciudades.service';
import { CiudadesController } from '../../controllers/ciudades/ciudades.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Ciudades])],
    providers:[CiudadesService],
    controllers:[CiudadesController]
})
export class CiudadesModule {}
