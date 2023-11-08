import { Module } from '@nestjs/common';
import { BlogYNoticiasController } from '../controllers/blog-y-noticias.controller';
import { BlogYNoticiasService } from '../services/blog-y-noticias.service';

@Module({
  controllers: [BlogYNoticiasController],
  providers: [BlogYNoticiasService]
})
export class BlogYNoticiasModule { }
