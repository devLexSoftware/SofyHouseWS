import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaEventosService } from './categoria-eventos.service';

describe('CategoriaEventosService', () => {
  let service: CategoriaEventosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaEventosService],
    }).compile();

    service = module.get<CategoriaEventosService>(CategoriaEventosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
