import { Evento } from '../evento/evento.entity';
export declare class Cliente {
    id_cliente: number;
    nombres: string;
    apellidos: string;
    inicio_contrato: string;
    fin_contrato: string;
    telefono: string;
    usuario: string;
    password: string;
    correo: string;
    contrato: string;
    INE: string;
    foto_perfil: string;
    eventos: Evento[];
}
