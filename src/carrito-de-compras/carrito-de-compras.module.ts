import { Module } from '@nestjs/common';
import { CarritoDeComprasController } from './carrito-de-compras.controller';

@Module({
  controllers: [CarritoDeComprasController]
})
export class CarritoDeComprasModule {}
