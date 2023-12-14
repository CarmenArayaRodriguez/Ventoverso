import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from 'src/entities/compra.entity';
import { ComprasService } from 'src/services/compras.service';
import { ComprasController } from 'src/controllers/compras.controller';
import { Producto } from 'src/entities/producto.entity';
import { Cliente } from 'src/entities/cliente.entity';
import { CarritoService } from 'src/services/carrito.service';
import { CarritoModule } from './carrito.module';
import { MetodoPago } from 'src/entities/metodo-de-pago.entity';
import { MetodoEnvio } from 'src/entities/metodo-de-envio.entity';
import { DetalleCompra } from 'src/entities/detalle-compra.entity';



@Module({
    imports: [TypeOrmModule.forFeature([Compra, Producto, Cliente, MetodoPago, MetodoEnvio, DetalleCompra]), CarritoModule],
    providers: [ComprasService],
    controllers: [ComprasController],
})
export class ComprasModule { }
