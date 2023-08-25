import { Test, TestingModule } from '@nestjs/testing';
import { ReservasDeCitaController } from './reservas-de-cita.controller';

describe('ReservasDeCitaController', () => {
  let controller: ReservasDeCitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservasDeCitaController],
    }).compile();

    controller = module.get<ReservasDeCitaController>(ReservasDeCitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
