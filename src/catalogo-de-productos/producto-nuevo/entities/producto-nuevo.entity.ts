import { v4 as uuidv4 } from 'uuid';

export class ProductoNuevo {
    id: string = uuidv4();
    nombre: string;
    marca: string;
    modelo: string;
    estrellas: number;
    imagenes: string[];
    precio: number;
    // caracteristicasPrincipales: string;
    descripcion: string;
    categoria: string;
    subcategoria: string;
}