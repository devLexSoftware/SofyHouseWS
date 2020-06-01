import { Test, TestingModule } from '@nestjs/testing';
import { InmuebleServicioService } from './inmueble-servicio.service';

describe('InmuebleServicioService', () => {
  let service: InmuebleServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InmuebleServicioService],
    }).compile();

    service = module.get<InmuebleServicioService>(InmuebleServicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
