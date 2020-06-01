import { Test, TestingModule } from '@nestjs/testing';
import { CiudadesController } from './ciudades.controller';

describe('Ciudades Controller', () => {
  let controller: CiudadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CiudadesController],
    }).compile();

    controller = module.get<CiudadesController>(CiudadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
