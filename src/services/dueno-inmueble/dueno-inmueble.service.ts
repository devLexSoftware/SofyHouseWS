import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DuenoInmueble } from '../../entities/dueno-inmueble/dueno-inmueble.entity';
import { Repository } from 'typeorm'; 

@Injectable()
export class DuenoInmuebleService {
    constructor(@InjectRepository(DuenoInmueble) private duenoRepository: Repository<DuenoInmueble>){}
    async getStatesList(){
        return await this.duenoRepository.find();
    }
}
 