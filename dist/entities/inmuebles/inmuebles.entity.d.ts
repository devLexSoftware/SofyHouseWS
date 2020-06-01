import { Ciudades } from "../ciudades/ciudades.entity";
import { Evento } from "../evento/evento.entity";
import { Zona } from "../zonas/zonas.entity";
import { InmuebleConServicio } from "../inmueble-con-servicios/inmueble-con-servicios.entity";
import { DuenoInmueble } from "../dueno-inmueble/dueno-inmueble.entity";
import { ImagenesInmueble } from "../imagenes_inmueble/imagenes-inmueble.entity";
export declare class Inmueble {
    id_inmueble: number;
    calle: string;
    numero_interior: string;
    numero_exterior: string;
    colonia: string;
    codigo_postal: string;
    precio: string;
    latitud: number;
    longitud: number;
    foto_principal: any;
    id_zona: Zona;
    id_ciudad: Ciudades;
    id_dueno_inmueble: DuenoInmueble;
    eventos: Evento[];
    inmuebleConServicio: InmuebleConServicio[];
    imagenesInmueble: ImagenesInmueble[];
}
