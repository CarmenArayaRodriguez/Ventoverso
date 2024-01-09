import { SeccionDestacado } from '../enums/seccion-destacado.enum';
import { CategoriaProducto } from 'src/enums/categoria-producto.enum';

export class DestacadoCard {
    id: number;
    imagenUrl: string;
    estrellas: number;
    nombre: string;
    precio: number;
    linkDetalle: string;
    categoria: CategoriaProducto;
    seccion: SeccionDestacado;
}
