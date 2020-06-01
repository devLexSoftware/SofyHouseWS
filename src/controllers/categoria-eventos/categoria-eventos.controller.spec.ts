import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaEventosController } from './categoria-eventos.controller';

describe('CategoriaEventos Controller', () => {
  let controller: CategoriaEventosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaEventosController],
    }).compile();

    controller = module.get<CategoriaEventosController>(CategoriaEventosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
