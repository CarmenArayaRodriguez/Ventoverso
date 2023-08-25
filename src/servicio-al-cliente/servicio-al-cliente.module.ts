import { Module } from '@nestjs/common';
import { ServicioAlClienteController } from './servicio-al-cliente.controller';

@Module({
  controllers: [ServicioAlClienteController]
})
export class ServicioAlClienteModule {}
