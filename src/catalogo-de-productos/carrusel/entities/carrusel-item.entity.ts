import { v4 as uuidv4 } from 'uuid';
import { CarruselItemTipo } from '../enums/carousel-item-tipo.enum';

export class CarruselItem {
    id: string = uuidv4();
    titulo: string;
    descripcion: string;
    imagenUrl: string;
    linkDetalle?: string;
    tipo: CarruselItemTipo;
}
