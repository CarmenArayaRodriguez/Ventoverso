import { v4 as uuidv4 } from 'uuid';

export class Favorito {
    id: string = uuidv4();
    productoId: string;
    usuarioId: string;
    fechaAgregado: Date;
}
