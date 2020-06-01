import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuenoInmueble } from '../../entities/dueno-inmueble/dueno-inmueble.entity';
import { DuenoInmuebleService } from '../../services/dueno-inmueble/dueno-inmueble.service';
import { DuenoInmuebleController } from '../../controllers/dueno-inmueble/dueno-inmueble.controller';

@Module({
    imports:[TypeOrmModule.forFeature([DuenoInmueble])],
    providers:[DuenoInmuebleService],
    controllers:[DuenoInmuebleController]
})
export class DuenoInmuebleModule {
    

}
 