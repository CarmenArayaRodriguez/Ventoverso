import { Test, TestingModule } from '@nestjs/testing';
import { CarritoDeComprasController } from './carrito-de-compras.controller';

describe('CarritoDeComprasController', () => {
  let controller: CarritoDeComprasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarritoDeComprasController],
    }).compile();

    controller = module.get<CarritoDeComprasController>(CarritoDeComprasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
