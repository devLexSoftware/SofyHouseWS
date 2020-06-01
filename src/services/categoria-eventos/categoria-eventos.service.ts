import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriaEvento } from "../../entities/categorias-eventos/categorias-eventos.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoriaEventosService {
    constructor(
        @InjectRepository(CategoriaEvento)
        private categoriaeventoRepository: Repository<CategoriaEvento>
      ) { }
      async getAllQuotations( idProblem: number ): Promise<CategoriaEvento[]> {
        return await this.categoriaeventoRepository.find({
          // eslint-disable-next-line @typescript-eslint/camelcase
          where: [{ id_problema_evento : idProblem }]
        });
      }
}
