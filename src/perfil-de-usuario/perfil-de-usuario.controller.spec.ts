import { Test, TestingModule } from '@nestjs/testing';
import { PerfilDeUsuarioController } from './perfil-de-usuario.controller';

describe('PerfilDeUsuarioController', () => {
  let controller: PerfilDeUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilDeUsuarioController],
    }).compile();

    controller = module.get<PerfilDeUsuarioController>(PerfilDeUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
