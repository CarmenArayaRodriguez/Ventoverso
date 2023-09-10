import { Injectable } from '@nestjs/common';
import { SuscripcionDTO } from './suscripcion/dto/suscripcion.dto';
import { EditarSuscripcionDTO } from './suscripcion/dto/editar-suscripcion.dto';

@Injectable()
export class ServicioAlClienteService {
    getServicioAlCliente(): string {
        return 'Servicio al cliente';
    }

    suscribir(suscripcionDTO: SuscripcionDTO) {

        return { mensaje: `Correo ${suscripcionDTO.correo} suscrito exitosamente!` };
    }

    editarSuscripcion(editarSuscripcionDTO: EditarSuscripcionDTO) {

        return { mensaje: `Correo con ID ${editarSuscripcionDTO.id} editado a ${editarSuscripcionDTO.nuevoCorreo} exitosamente!` };
    }

    darDeBaja(id: string) {

        return { mensaje: `Suscripción con ID ${id} dada de baja exitosamente!` };
    }
}

