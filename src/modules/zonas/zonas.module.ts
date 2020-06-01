import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zona }   from '../../entities/zonas/zonas.entity';
import { ZonasService }from '../../services/zonas/zonas.service';
import { ZonaController }from '../../controllers/zona/zona.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Zona])],
    providers:[ZonasService],
    controllers:[ZonaController]
})
export class ZonasModule {}
