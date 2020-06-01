import { ImagenInmuebleService } from "../../services/imagen-inmueble/imagen-inmueble.service";
export declare class ImagenInmuebleController {
    private ImgInmuebleService;
    constructor(ImgInmuebleService: ImagenInmuebleService);
    createInmueble(ImgInmuebleData: any): Promise<object>;
}
