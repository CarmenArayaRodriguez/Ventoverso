import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from 'src/entities/compra.entity';
import { ComprasService } from 'src/services/compras.service';
import { ComprasController } from 'src/controllers/compras.controller';
import { Producto } from 'src/entities/producto.entity';
import { Cliente } from 'src/entities/cliente.entity';



@Module({
    imports: [TypeOrmModule.forFeature([Compra, Producto, Cliente])],
    providers: [ComprasService],
    controllers: [ComprasController],
})
export class ComprasModule { }
