import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmuebleConServicio } from '../../entities/inmueble-con-servicios/inmueble-con-servicios.entity';
import { InmuebleServicioService } from '../../services/inmueble-servicio/inmueble-servicio.service';
import { InmuebleServicioController } from '../../controllers/inmueble-servicio/inmueble-servicio.controller';

@Module({
    imports:[TypeOrmModule.forFeature([InmuebleConServicio])],
    providers:[InmuebleServicioService],
    controllers:[InmuebleServicioController]
})
export class InmuebleServicioModule {}
