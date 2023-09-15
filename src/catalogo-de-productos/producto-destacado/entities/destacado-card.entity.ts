import { v4 as uuidv4 } from 'uuid';

export class DestacadoCard {
    id: string = uuidv4();
    imagenUrl: string;
    estrellas: number;
    rating: number;
    nombre: string;
    precio: number;
}
