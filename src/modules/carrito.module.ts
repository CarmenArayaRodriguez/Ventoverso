import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from 'src/entities/carrito.entity';
import { ProductoCarrito } from 'src/entities/producto-carrito.entity';
import { CarritoService } from 'src/services/carrito.service';
import { CarritoController } from 'src/controllers/carrito.controller';
import { Producto } from 'src/entities/producto.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Carrito, Producto, ProductoCarrito]),
    ],
    providers: [CarritoService],
    exports: [CarritoService],
    controllers: [CarritoController]
})
export class CarritoModule { }
