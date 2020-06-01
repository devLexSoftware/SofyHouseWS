import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { ContratosService } from '../../services/contratos/contratos.service';
import { Contrato } from 'src/entities/contrato/contrato.entity';

@Controller('contratos')
export class ContratosController {
    constructor(private contratoServ:
        ContratosService) { }
    @Get('get_contrato_inmueble/:id')
    async getContratoList(@Param("id") inmuebeId: string): Promise<object> {
        return await this.contratoServ.getContratoInmueble(inmuebeId);
    }
    @Get('get_contrato_inmueble_cliente/:id')
    async getContratoListCliente(@Param("id") clienteId: string): Promise<object[]> {
        return await this.contratoServ.getContratoCliente(clienteId);
    }

    @Post("create_contrato")
    async createUserCli(@Body() contratoDta: Contrato): Promise<object> {
      return await this.contratoServ.createContrato(contratoDta);
    }
}
