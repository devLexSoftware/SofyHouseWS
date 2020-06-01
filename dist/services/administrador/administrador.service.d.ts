import { Administrador } from "../../entities/administrador/administrador.entity";
import { Repository } from "typeorm";
export declare class AdministradorService {
    private admonRepository;
    constructor(admonRepository: Repository<Administrador>);
    createUser(userData: Administrador): Promise<object>;
    createUserClient(userData: Administrador): Promise<object>;
    loginWithEmail(userData: Administrador): Promise<object>;
    getAdmonPictureByEmail(emailAdmonUser: string): Promise<object>;
    getAdmonPictureById(iduser: string): Promise<object>;
    getStatesList(TipoUsuario: any): Promise<Administrador[]>;
}
