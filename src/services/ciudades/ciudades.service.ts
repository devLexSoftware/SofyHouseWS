import { Injectable } from "@nestjs/common";
import { Ciudades } from "../../entities/ciudades/ciudades.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CiudadesService {
  constructor(
    @InjectRepository(Ciudades) private ciudadesRepository: Repository<Ciudades>
  ) {}

  async getCitiesByState(idState: number): Promise<Ciudades[]> {
    return await this.ciudadesRepository.find({
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_estado: idState }]
    });
  }
}
