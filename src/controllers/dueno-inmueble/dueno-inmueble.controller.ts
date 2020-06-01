import { Controller, Get } from '@nestjs/common';
import { DuenoInmuebleService } from '../../services/dueno-inmueble/dueno-inmueble.service';
import { DuenoInmueble } from 'src/entities/dueno-inmueble/dueno-inmueble.entity';

@Controller('dueno-inmueble')
export class DuenoInmuebleController {
    constructor(private duenoSrv:
        DuenoInmuebleService){}

    @Get()
    async getStatesList():Promise<DuenoInmueble[]>{
        return await this.duenoSrv.getStatesList();
    }
}
 