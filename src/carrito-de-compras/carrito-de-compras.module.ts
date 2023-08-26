import { Module } from '@nestjs/common';
import { CarritoDeComprasController } from './carrito-de-compras.controller';
import { CarritoDeComprasService } from './carrito-de-compras.service';

@Module({
  controllers: [CarritoDeComprasController],
  providers: [CarritoDeComprasService]
})
export class CarritoDeComprasModule {}
