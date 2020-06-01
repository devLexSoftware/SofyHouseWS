import { Cotizacion } from '../../entities/cotizaciones/cotizaciones.entity';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';
export declare class CotizacionesController {
    private cotizacionService;
    constructor(cotizacionService: CotizacionService);
    getAllQuotations(): Promise<Cotizacion[]>;
    createCotizacion(cotizacionData: Cotizacion): Promise<object>;
    getQuotationsById(quotarionId: string): Promise<Cotizacion>;
    updateEventStatus(dataToUpdate: any): Promise<any>;
}
