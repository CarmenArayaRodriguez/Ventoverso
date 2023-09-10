import { v4 as uuidv4 } from 'uuid';

export class Suscripcion {
    id: string = uuidv4();
    correo: string;
    fechaSuscripcion: Date;
}
