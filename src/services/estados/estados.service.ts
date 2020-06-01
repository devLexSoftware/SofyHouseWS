import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estados } from '../../entities/estados/estados.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstadosService {
    constructor(@InjectRepository(Estados) private estadosRepository: Repository<Estados>){}
    async getStatesList(){
        return await this.estadosRepository.find();
    }
}
