import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrador } from "../../entities/administrador/administrador.entity";
import { AdministradorService } from "../../services/administrador/administrador.service";
import { AdministradorController } from "../../controllers/administrador/administrador.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Administrador])],
    providers:[AdministradorService],
    controllers:[AdministradorController]
})
export class AdministradorModule{}