import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ImagenesInmueble } from "../../entities/imagenes_inmueble/imagenes-inmueble.entity";
import { Repository, createQueryBuilder } from "typeorm";
import { isNullOrUndefined } from "util";
import { async } from "rxjs/internal/scheduler/async";



@Injectable()
export class ImagenInmuebleService {
    constructor(
        @InjectRepository(ImagenesInmueble) private ImagenesInmuebleRepository: Repository<ImagenesInmueble>
    ) { }

    async createImgInmueble(ImgInmuebleData): Promise<object> {
        try {
            
            ImgInmuebleData.forEach(async element => {

                // eslint-disable-next-line @typescript-eslint/camelcase
                const buff = new Buffer(element.foto, 'base64');
                // eslint-disable-next-line @typescript-eslint/camelcase
                element.foto = buff;
                // eslint-disable-next-line @typescript-eslint/camelcase
                const res = this.ImagenesInmuebleRepository.create(element);
                const ImgResponse = await this.ImagenesInmuebleRepository.save(res);
                
            });
            // delete userData["password"];  
            return {
                status: "success",
            }
        } catch (error) {
            console.log("ERROR===>", error);
            if (error.code == "ER_DUP_ENTRY")
                return {
                    status: "error",
                    message: "Ocurrió un error al registrar el iamgenes, intentelo de nuevo."
                };
        }
    }
}