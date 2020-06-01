import { Test, TestingModule } from '@nestjs/testing';
import { DuenoInmuebleController } from './dueno-inmueble.controller';

describe('DuenoInmueble Controller', () => {
  let controller: DuenoInmuebleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuenoInmuebleController],
    }).compile();

    controller = module.get<DuenoInmuebleController>(DuenoInmuebleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
