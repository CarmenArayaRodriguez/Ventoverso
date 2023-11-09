import { Module } from '@nestjs/common';
import { CatalogoDeProductosController } from '../controllers/catalogo-de-productos.controller';
import { ProductoService } from '../services/producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/entities/producto.entity';
import { ProductoController } from 'src/controllers/producto.contoller';
import { Categoria } from 'src/entities/categoria.entity';
import { Subcategoria } from 'src/entities/subcategoria.entity';
import { Marca } from 'src/entities/marca.entity';
import { ImagenProducto } from '../entities/imagen.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto, Categoria, Subcategoria, Marca, ImagenProducto]),
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule { }
