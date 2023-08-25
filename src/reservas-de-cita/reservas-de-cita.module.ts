import { Module } from '@nestjs/common';
import { ReservasDeCitaController } from './reservas-de-cita.controller';

@Module({
  controllers: [ReservasDeCitaController]
})
export class ReservasDeCitaModule {}
