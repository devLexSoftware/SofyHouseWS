import { Cliente } from "../cliente/cliente.entity";
import { EstatusEvento } from "../estatus-eventos/estatus-eventos.entity";
import { CategoriaEvento } from "../categorias-eventos/categorias-eventos.entity";
import { Proveedor } from "../proveedores/proveedores.entity";
import { Inmueble } from "../inmuebles/inmuebles.entity";
export declare class Evento {
    id_evento: number;
    descripcion_problema: string;
    fecha_creacion: Date;
    id_cliente: Cliente;
    id_categoria_evento: CategoriaEvento;
    id_estatus_evento: EstatusEvento;
    id_proveedor: Proveedor;
    id_inmueble: Inmueble;
}
