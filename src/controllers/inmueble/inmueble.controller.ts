import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { InmuebleService } from "../../services/inmueble/inmueble.service";
import { Inmueble } from "../../entities/inmuebles/inmuebles.entity";

@Controller("inmuebles")
export class InmuebleController {
  constructor(private inmuebleService: InmuebleService) {}
  @Get()
  async getAllProperties(): Promise<Inmueble[]> {
    return await this.inmuebleService.getAllProperties();
  }

  @Get(":id")
  async getPropertyById(@Param("id") propertyId: string): Promise<Inmueble> {
    
    return await this.inmuebleService.getPropertyByID(propertyId);
  }
  @Get("propietario/:id")
  async getPropertyByIdProp(@Param("id") propertyId: string): Promise<Inmueble[]> {
    
    return await this.inmuebleService.getPropertyByIDProp(propertyId);
  }
  @Post("create_propierty")
  async createInmueble(@Body() inmuebleData: Inmueble): Promise<object> {
    
    return await this.inmuebleService.createInmueble(inmuebleData);
  }
}
