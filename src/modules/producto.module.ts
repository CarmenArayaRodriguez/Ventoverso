import { Module } from '@nestjs/common';
import { ProductoService } from '../services/producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/entities/producto.entity';
import { ProductoController } from 'src/controllers/producto.contoller';
import { Categoria } from 'src/entities/categoria.entity';
import { Subcategoria } from 'src/entities/subcategoria.entity';
import { Marca } from 'src/entities/marca.entity';
import { ImagenProducto } from '../entities/imagen-producto.entity';
import { AutenticacionModule } from './autenticacion.module';
import { DetalleProducto } from 'src/entities/detalle-producto.entity';
import { ImagenesService } from 'src/services/imagenes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto, Categoria, Subcategoria, Marca, ImagenProducto, DetalleProducto]), AutenticacionModule
  ],
  controllers: [ProductoController],
  providers: [ProductoService, ImagenesService]
})
export class ProductoModule { }
