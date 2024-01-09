import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from 'src/entities/compra.entity';
import { ComprasService } from 'src/services/compras.service';
import { ComprasController } from 'src/controllers/compras.controller';
import { Producto } from 'src/entities/producto.entity';
import { Cliente } from 'src/entities/cliente.entity';
import { CarritoModule } from './carrito.module';
import { MetodoPago } from 'src/entities/metodo-de-pago.entity';
import { MetodoEnvio } from 'src/entities/metodo-de-envio.entity';
import { DetalleCompra } from 'src/entities/detalle-compra.entity';
import { AutenticacionModule } from './autenticacion.module';
import { DireccionEnvio } from 'src/entities/direccion-envio.entity';
import { Ciudad } from 'src/entities/ciudad.entity';
import { Comuna } from 'src/entities/comuna.entity';
import { Region } from 'src/entities/region.entity';



@Module({
    imports: [TypeOrmModule.forFeature([Compra, Producto, Cliente, MetodoPago, MetodoEnvio, DetalleCompra, DireccionEnvio, Ciudad, Comuna, Region]), CarritoModule, AutenticacionModule],
    providers: [ComprasService],
    controllers: [ComprasController],
})
export class ComprasModule { }
