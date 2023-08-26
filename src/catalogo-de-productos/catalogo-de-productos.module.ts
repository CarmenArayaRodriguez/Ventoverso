import { Module } from '@nestjs/common';
import { CatalogoDeProductosController } from './catalogo-de-productos.controller';
import { CatalogoDeProductosService } from './catalogo-de-productos.service';

@Module({
  controllers: [CatalogoDeProductosController],
  providers: [CatalogoDeProductosService]
})
export class CatalogoDeProductosModule {}
