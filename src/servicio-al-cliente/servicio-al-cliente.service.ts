import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicioAlClienteService {
    getServicioAlCliente(): string {
        return 'Servicio al cliente';
    }
}
