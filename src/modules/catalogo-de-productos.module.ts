import { Module } from '@nestjs/common';
import { CatalogoDeProductosController } from 'src/controllers/catalogo-de-productos.controller';
import { CatalogoDeProductosService } from 'src/services/catalogo-de-productos.service';

@Module({
    controllers: [CatalogoDeProductosController],
    providers: [CatalogoDeProductosService]
})
export class CatalogoDeProductosModule { }