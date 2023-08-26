import { Module } from '@nestjs/common';
import { BlogYNoticiasController } from './blog-y-noticias.controller';
import { BlogYNoticiasService } from './blog-y-noticias.service';

@Module({
  controllers: [BlogYNoticiasController],
  providers: [BlogYNoticiasService]
})
export class BlogYNoticiasModule {}
