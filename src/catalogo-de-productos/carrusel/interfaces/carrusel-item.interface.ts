export interface ICarouselItem {
    id: string;
    titulo: string;
    descripcion: string;
    imagenUrl: string;
    tipo: 'Promoción' | 'Nuevo Producto' | 'Concurso';
    linkDetalle?: string;
}
