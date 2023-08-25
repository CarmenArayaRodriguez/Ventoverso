import { Module } from '@nestjs/common';
import { BlogYNoticiasController } from './blog-y-noticias.controller';

@Module({
  controllers: [BlogYNoticiasController]
})
export class BlogYNoticiasModule {}
