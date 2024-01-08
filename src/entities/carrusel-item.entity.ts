import { v4 as uuidv4 } from 'uuid';
import { CarruselItemTipo } from '../enums/carrusel-item-tipo.enum';

export class CarruselItem {
    id: number;
    titulo: string;
    descripcion: string;
    imagenUrl: string;
    linkDetalle?: string;
    tipo: CarruselItemTipo;
}
