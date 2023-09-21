import { v4 as uuidv4 } from 'uuid';
import { SeccionDestacado } from '../enums/seccion-destacado.enum';
import { CategoriaProducto } from 'src/catalogo-de-productos/enums/categoria-producto.enum';

export class DestacadoCard {
    id: string = uuidv4();
    imagenUrl: string;
    estrellas: number;
    nombre: string;
    precio: number;
    categoria: CategoriaProducto;
    seccion: SeccionDestacado;
}
