import { v4 as uuidv4 } from 'uuid';

export class CarouselItem {
    id: string = uuidv4();
    titulo: string;
    descripcion: string;
    imagenUrl: string;
    tipo: 'Promoción' | 'Nuevo Producto' | 'Concurso';
    linkDetalle?: string;
}
