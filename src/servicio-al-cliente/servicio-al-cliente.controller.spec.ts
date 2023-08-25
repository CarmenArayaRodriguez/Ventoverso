import { Test, TestingModule } from '@nestjs/testing';
import { ServicioAlClienteController } from './servicio-al-cliente.controller';

describe('ServicioAlClienteController', () => {
  let controller: ServicioAlClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicioAlClienteController],
    }).compile();

    controller = module.get<ServicioAlClienteController>(ServicioAlClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
