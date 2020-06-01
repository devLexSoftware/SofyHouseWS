import { Controller, Get, Param, Put, Body, Post } from "@nestjs/common";
import { ImagenesInmueble } from "../../entities/imagenes_inmueble/imagenes-inmueble.entity";
import { ImagenInmuebleService } from "../../services/imagen-inmueble/imagen-inmueble.service";

@Controller('imagen-inmueble')
export class ImagenInmuebleController {
    constructor(private ImgInmuebleService: ImagenInmuebleService) {}
    @Post("registrar_img")
    async createInmueble(@Body() ImgInmuebleData: any): Promise<object> {
        
        return await this.ImgInmuebleService.createImgInmueble(ImgInmuebleData);
    }
}
