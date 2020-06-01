import { Test, TestingModule } from '@nestjs/testing';
import { ProblemasEventosController } from './problemas-eventos.controller';

describe('ProblemasEventos Controller', () => {
  let controller: ProblemasEventosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProblemasEventosController],
    }).compile();

    controller = module.get<ProblemasEventosController>(ProblemasEventosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
