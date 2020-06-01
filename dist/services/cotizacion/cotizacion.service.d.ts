import { Cotizacion } from "../../entities/cotizaciones/cotizaciones.entity";
import { Repository } from "typeorm";
export declare class CotizacionService {
    private cotizacionRepository;
    constructor(cotizacionRepository: Repository<Cotizacion>);
    getPropertyByID(quotarionId: any): Promise<Cotizacion>;
    getAllQuotations(): Promise<Cotizacion[]>;
    createContizacion(cotizacionData: Cotizacion): Promise<object>;
    updateQuotStatus(dataToUpdate: any): Promise<any>;
}
