import { Module } from '@nestjs/common';
import { InmuebleService } from '../../services/inmueble/inmueble.service';
import { InmuebleController } from '../../controllers/inmueble/inmueble.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inmueble } from '../../entities/inmuebles/inmuebles.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Inmueble])],
    providers:[InmuebleService],
    controllers:[InmuebleController]
})
export class InmuebleModule {}
