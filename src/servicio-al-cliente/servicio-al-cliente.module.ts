import { Module } from '@nestjs/common';
import { ServicioAlClienteController } from './servicio-al-cliente.controller';
import { ServicioAlClienteService } from './servicio-al-cliente.service';

@Module({
  controllers: [ServicioAlClienteController],
  providers: [ServicioAlClienteService]
})
export class ServicioAlClienteModule {}
