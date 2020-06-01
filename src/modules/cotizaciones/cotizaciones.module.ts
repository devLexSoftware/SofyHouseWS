import { Module } from '@nestjs/common';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';
import { CotizacionesController } from '../../controllers/cotizaciones/cotizaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotizacion } from '../../entities/cotizaciones/cotizaciones.entity';
import { EventoService } from 'src/services/evento/evento.service';
import { Evento } from 'src/entities/evento/evento.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Cotizacion,Evento])],
    providers:[CotizacionService,EventoService],
    controllers:[CotizacionesController] 
})
export class CotizacionesModule {}
