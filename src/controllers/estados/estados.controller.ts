import { Controller, Get } from '@nestjs/common';
import { EstadosService } from '../../services/estados/estados.service';
import { Estados } from 'src/entities/estados/estados.entity';

@Controller('estados')
export class EstadosController {
    constructor(private estadosSrv:EstadosService){}

    @Get()
    async getStatesList():Promise<Estados[]>{
        return await this.estadosSrv.getStatesList();
    }
}
