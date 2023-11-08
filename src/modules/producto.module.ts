import { Module } from '@nestjs/common';
import { CatalogoDeProductosController } from '../controllers/catalogo-de-productos.controller';
import { ProductoService } from '../services/producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/entities/producto.entity';
import { ProductoController } from 'src/controllers/producto.contoller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto]),
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule { }
