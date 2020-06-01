import { Test, TestingModule } from '@nestjs/testing';
import { InmuebleServicioController } from './inmueble-servicio.controller';

describe('InmuebleServicio Controller', () => {
  let controller: InmuebleServicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InmuebleServicioController],
    }).compile();

    controller = module.get<InmuebleServicioController>(InmuebleServicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
