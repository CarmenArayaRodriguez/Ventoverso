import { Module } from '@nestjs/common';
import { CarritoDeComprasController } from '../controllers/carrito-de-compras.controller';
import { CarritoDeComprasService } from '../services/carrito-de-compras.service';

@Module({
  controllers: [CarritoDeComprasController],
  providers: [CarritoDeComprasService]
})
export class CarritoDeComprasModule { }
