import { CarruselItemTipo } from '../enums/carrusel-item-tipo.enum';

export class CarruselItem {
    id: number;
    titulo: string;
    descripcion: string;
    imagenUrl: string;
    linkDetalle?: string;
    tipo: CarruselItemTipo;
}
