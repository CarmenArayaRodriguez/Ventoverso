import { v4 as uuidv4 } from 'uuid';

export class CategoriaClarinete {
    id: string = uuidv4();
    nombre: string;
    imagenUrl: string;
}
