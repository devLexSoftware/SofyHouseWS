import { Test, TestingModule } from '@nestjs/testing';
import { AdministradorController } from './administrador.controller';

describe('Administrador Controller', () => {
  let controller: AdministradorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministradorController],
    }).compile();

    controller = module.get<AdministradorController>(AdministradorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
