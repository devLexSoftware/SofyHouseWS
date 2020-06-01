import { Controller, Param, Get } from "@nestjs/common";
import { Ciudades } from "../../entities/ciudades/ciudades.entity";
import { CiudadesService } from '../../services/ciudades/ciudades.service';

@Controller("ciudades")
export class CiudadesController {
  constructor(private citiesSrv: CiudadesService) {}

  @Get("getCitiesByState/:idState")
  async getCitiesByState(@Param("idState") idState: number): Promise<Ciudades[]> {
    return await this.citiesSrv.getCitiesByState(idState);
  }
}
