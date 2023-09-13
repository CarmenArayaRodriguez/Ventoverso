import { v4 as uuidv4 } from 'uuid';

export class Destacado {
    id: string = uuidv4();
    productoId: string;
    usuarioId: string;
    fechaDestacado: Date;
}
