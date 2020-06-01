import { Injectable } from '@nestjs/common';
import { Contrato } from "../../entities/contrato/contrato.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { isNullOrUndefined } from 'util';

@Injectable()
export class ContratosService {
    constructor(
        @InjectRepository(Contrato) private ContratoRepository: Repository<Contrato>
    ) { }


    async getContratoInmueble(IdInmueble): Promise<object> {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const ContratoData: Contrato = await this.ContratoRepository.findOne({
            // eslint-disable-next-line @typescript-eslint/camelcase
            where: [{ id_inmueble: IdInmueble }],

        });
        
        if (!isNullOrUndefined(ContratoData)) {
            return {
                estatus: "success",
                data: ContratoData
            }
        } else {
            return {
                estatus: "success",
                data: ContratoData
            };
        }

    }
    async getContratoCliente(IdCliente): Promise<object[]> {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const ContratoData = await this.ContratoRepository.find({
            // eslint-disable-next-line @typescript-eslint/camelcase
            where: [{ id_cliente: IdCliente }],
            relations: ['id_inmueble',
                'id_inmueble.id_ciudad',
                'id_inmueble.id_ciudad.id_estado'
            ]
        });
        ContratoData.forEach(element => {
            if (isNullOrUndefined(element.id_inmueble.foto_principal) == false) {
                const buf = Buffer.from(element.id_inmueble.foto_principal, "binary");
                // eslint-disable-next-line @typescript-eslint/camelcase
                element.id_inmueble.foto_principal = buf.toString("base64");
            }
        });
        
        return ContratoData;
    }
    async createContrato(contratoData:Contrato):Promise<object>{
        try {
            if(!isNullOrUndefined(contratoData.ine)){
                const buff = new Buffer(contratoData.ine, 'base64');
                // eslint-disable-next-line @typescript-eslint/camelcase
                contratoData.ine = buff;
            }
            if(!isNullOrUndefined(contratoData.contrato)){
                const buff = new Buffer(contratoData.contrato, 'base64');
                // eslint-disable-next-line @typescript-eslint/camelcase
                contratoData.contrato = buff;
            }
            
            const res = this.ContratoRepository.create(contratoData);
            const cto = await this.ContratoRepository.save(res);
      
         
            return cto.id_contrato
              ? {
                status: "success",
                message: "Usuario creado correctamente",
              
              }
              : {
                status: "error",
                message:
                  "Ocurrió un error al registrar el usuario, intentelo de nuevo."
              };
          } catch (error) {
            console.log("ERROR===>", error);
            if (error.code == "ER_DUP_ENTRY")
              return {
                status: "error",
                message: "El usuario ya se encuentra registrado en el sistema."
              };
          }
    }

}
