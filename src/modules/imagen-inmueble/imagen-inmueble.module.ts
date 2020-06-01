import { Module } from '@nestjs/common';
import { ImagenInmuebleService } from '../../services/imagen-inmueble/imagen-inmueble.service';
import { ImagenInmuebleController } from '../../controllers/imagen-inmueble/imagen-inmueble.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenesInmueble } from '../../entities/imagenes_inmueble/imagenes-inmueble.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ImagenesInmueble])],
    providers: [ImagenInmuebleService],
    controllers: [ImagenInmuebleController]
})

export class ImagenInmuebleModule { }
