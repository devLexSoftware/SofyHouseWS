import { Test, TestingModule } from '@nestjs/testing';
import { ZonaController } from './zona.controller';

describe('Zona Controller', () => {
  let controller: ZonaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZonaController],
    }).compile();

    controller = module.get<ZonaController>(ZonaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
