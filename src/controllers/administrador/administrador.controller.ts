import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { AdministradorService } from "../../services/administrador/administrador.service";
import { Administrador } from "../../entities/administrador/administrador.entity";

@Controller("administrador")
export class AdministradorController {
  constructor(private AdmonService: AdministradorService) { }

  @Post("create_user")
  async createUser(@Body() userData: Administrador): Promise<object> {
    return await this.AdmonService.createUser(userData);
  }   
  @Post("create_user_client")
  async createUserCli(@Body() userData: Administrador): Promise<object> {
    return await this.AdmonService.createUserClient(userData);
  }

  @Post("login")
  async loginWithEmail(@Body() userData: Administrador): Promise<object> {
    return await this.AdmonService.loginWithEmail(userData);
  }

  @Get("get_picture_by_email/:email")
  async getAdmonPictureByEmail(
    @Param("email") emailAdmonUser: string
  ): Promise<object> {
    return await this.AdmonService.getAdmonPictureByEmail(emailAdmonUser);
  }

  @Get("get_data_id/:id")
  async getAdmonPictureById(
    @Param("id") emailAdmonUser: string
  ): Promise<object> {
    return await this.AdmonService.getAdmonPictureById(emailAdmonUser);
  }

  @Get('get_all_props')
    async getStatesListProp():Promise<Administrador[]>{
        return await this.AdmonService.getStatesList(2);
    }
    
  @Get('get_all_prov')
  async getStatesListProv():Promise<Administrador[]>{
      return await this.AdmonService.getStatesList(4);
  }
}
