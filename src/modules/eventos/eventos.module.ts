import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from '../../entities/evento/evento.entity';
import { EventoService } from '../../services/evento/evento.service';
import { EventoController } from 'src/controllers/eventos/evento.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Evento])],
    providers:[EventoService],
    controllers:[EventoController]
})
export class EventosModule {}
