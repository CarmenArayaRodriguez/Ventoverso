import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservasDeCitaService {
    getReservasDeCita(): string {
        return 'Reservas de cita';
    }
}
