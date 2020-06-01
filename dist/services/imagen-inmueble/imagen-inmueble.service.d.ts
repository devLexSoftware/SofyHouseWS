import { ImagenesInmueble } from "../../entities/imagenes_inmueble/imagenes-inmueble.entity";
import { Repository } from "typeorm";
export declare class ImagenInmuebleService {
    private ImagenesInmuebleRepository;
    constructor(ImagenesInmuebleRepository: Repository<ImagenesInmueble>);
    createImgInmueble(ImgInmuebleData: any): Promise<object>;
}
