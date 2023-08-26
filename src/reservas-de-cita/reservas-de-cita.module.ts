import { Module } from '@nestjs/common';
import { ReservasDeCitaController } from './reservas-de-cita.controller';
import { ReservasDeCitaService } from './reservas-de-cita.service';

@Module({
  controllers: [ReservasDeCitaController],
  providers: [ReservasDeCitaService]
})
export class ReservasDeCitaModule {}
