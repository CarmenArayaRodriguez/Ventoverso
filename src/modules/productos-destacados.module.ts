import { Module } from '@nestjs/common';
import { ProductosDestacadosService } from 'src/services/productos-destacados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/entities/producto.entity';
import { ProductosDestacadosController } from '../controllers/productos-destacados.controller';
import { ImagenProducto } from 'src/entities/imagen-producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Producto, ImagenProducto])],
    controllers: [ProductosDestacadosController],
    providers: [ProductosDestacadosService],
})
export class ProductosDestacadosModule { }
