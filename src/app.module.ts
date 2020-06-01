import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorModule } from './modules/administrador/administrador.module';
import { InmuebleModule } from './modules/inmueble/inmueble.module';
import { EventosModule } from './modules/eventos/eventos.module';
import { CotizacionesModule } from './modules/cotizaciones/cotizaciones.module';
import { InmuebleServicioModule } from './modules/inmueble-servicio/inmueble-servicio.module';
import { EstadosModule } from './modules/estados/estados.module';
import { CiudadesModule } from './modules/ciudades/ciudades.module';
import { ZonasModule } from './modules/zonas/zonas.module';
import { CategoriaEventosModule } from './modules/categoria-eventos/categoria-eventos.module';
import { ProblemasEventosModule } from './modules/problemas-eventos/problemas-eventos.module';
import { DuenoInmuebleModule } from './modules/dueno-inmueble/dueno-inmueble.module';
import { ContratosModule } from './modules/contratos/contratos.module';
import { ImagenInmuebleModule } from './modules/imagen-inmueble/imagen-inmueble.module';


@Module({
  imports: [TypeOrmModule.forRoot(),
  AdministradorModule,
  InmuebleModule,
  EventosModule,
  CotizacionesModule,
  InmuebleServicioModule,
  EstadosModule,
  CiudadesModule,
  ZonasModule,
  CategoriaEventosModule,
  ProblemasEventosModule,
  DuenoInmuebleModule,
  ContratosModule,
  ImagenInmuebleModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
