import { Controller,Get} from '@nestjs/common';
import {ZonasService} from '../../services/zonas/zonas.service';
import {Zona} from '../../entities/zonas/zonas.entity';
@Controller('zona')
export class ZonaController {
    constructor(private zonasSrv:ZonasService){}

    @Get()
    async getStatesList():Promise<Zona[]>{
        return await this.zonasSrv.getStatesList();
    }
}
