import { Test, TestingModule } from '@nestjs/testing';
import { CatalogoDeProductosController } from './catalogo-de-productos.controller';

describe('CatalogoDeProductosController', () => {
  let controller: CatalogoDeProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatalogoDeProductosController],
    }).compile();

    controller = module.get<CatalogoDeProductosController>(CatalogoDeProductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
