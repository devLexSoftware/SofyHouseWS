import { Inmueble } from "../inmuebles/inmuebles.entity";
export declare class Contrato {
    id_contrato: number;
    fecha_inicio: Date;
    fecha_fin: Date;
    telefono: string;
    ine: any;
    contrato: any;
    id_dueno: any;
    id_cliente: any;
    id_inmueble: Inmueble;
}
