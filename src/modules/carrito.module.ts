import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from 'src/entities/carrito.entity';
import { ProductoCarrito } from 'src/entities/producto-carrito.entity';
import { CarritoService } from 'src/services/carrito.service';
import { CarritoController } from 'src/controllers/carrito.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Carrito, ProductoCarrito]),
    ],
    providers: [CarritoService],
    controllers: [CarritoController]
})
export class CarritoModule { }
