import { Module } from '@nestjs/common';
import { ProductosRelacionadosService } from 'src/services/productos-relacionados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/entities/producto.entity';
import { ProductosRelacionadosController } from 'src/controllers/productos-relacionados.controller';
import { ImagenProducto } from 'src/entities/imagen-producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Producto, ImagenProducto])],
    controllers: [ProductosRelacionadosController],
    providers: [ProductosRelacionadosService],
})
export class ProductosRelacionadosModule { }
