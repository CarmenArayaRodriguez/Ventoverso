import { Test, TestingModule } from '@nestjs/testing';
import { BlogYNoticiasController } from './blog-y-noticias.controller';

describe('BlogYNoticiasController', () => {
  let controller: BlogYNoticiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogYNoticiasController],
    }).compile();

    controller = module.get<BlogYNoticiasController>(BlogYNoticiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
