import { Test, TestingModule } from '@nestjs/testing';
import { ProblemasEventosService } from './problemas-eventos.service';

describe('ProblemasEventosService', () => {
  let service: ProblemasEventosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProblemasEventosService],
    }).compile();

    service = module.get<ProblemasEventosService>(ProblemasEventosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
