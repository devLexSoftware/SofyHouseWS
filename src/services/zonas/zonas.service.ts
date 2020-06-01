import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Zona } from '../../entities/zonas/zonas.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ZonasService {
    constructor(@InjectRepository(Zona) private zonasRepository: Repository<Zona>){}
    async getStatesList(){
        return await this.zonasRepository.find();
    }
} 