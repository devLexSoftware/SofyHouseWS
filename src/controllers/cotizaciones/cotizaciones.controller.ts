import { Controller, Get ,Post, Body, Param, Put} from '@nestjs/common';
import { Cotizacion } from '../../entities/cotizaciones/cotizaciones.entity';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';

@Controller('cotizaciones')
export class CotizacionesController {

    constructor(private cotizacionService:CotizacionService){}

    @Get()
    async getAllQuotations():Promise<Cotizacion[]>{
        return await this.cotizacionService.getAllQuotations();
    }
    @Post("create_cotizacion")
    async createCotizacion(@Body() cotizacionData: Cotizacion): Promise<object> {
      return await this.cotizacionService.createContizacion(cotizacionData);
    }

    @Get(':id')
    async getQuotationsById(@Param("id") quotarionId: string):Promise<Cotizacion>{
        return await this.cotizacionService.getPropertyByID(quotarionId);
    }

    @Put()
    async updateEventStatus(@Body() dataToUpdate:any): Promise<any>{
      return await this.cotizacionService.updateQuotStatus(dataToUpdate);
    }
}
