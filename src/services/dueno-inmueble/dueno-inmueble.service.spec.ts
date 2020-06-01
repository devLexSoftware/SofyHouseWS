import { Test, TestingModule } from '@nestjs/testing';
import { DuenoInmuebleService } from './dueno-inmueble.service';

describe('DuenoInmuebleService', () => {
  let service: DuenoInmuebleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuenoInmuebleService],
    }).compile();

    service = module.get<DuenoInmuebleService>(DuenoInmuebleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
