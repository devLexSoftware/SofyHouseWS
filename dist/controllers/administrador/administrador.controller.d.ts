import { AdministradorService } from "../../services/administrador/administrador.service";
import { Administrador } from "../../entities/administrador/administrador.entity";
export declare class AdministradorController {
    private AdmonService;
    constructor(AdmonService: AdministradorService);
    createUser(userData: Administrador): Promise<object>;
    createUserCli(userData: Administrador): Promise<object>;
    loginWithEmail(userData: Administrador): Promise<object>;
    getAdmonPictureByEmail(emailAdmonUser: string): Promise<object>;
    getAdmonPictureById(emailAdmonUser: string): Promise<object>;
    getStatesListProp(): Promise<Administrador[]>;
    getStatesListProv(): Promise<Administrador[]>;
}
