export interface IProductoNuevo {
    id: number;
    nombre: string;
    marca: string;
    modelo: string;
    estrellas: number;
    imagenes: string[];
    precio: number;
    linkDetalle: string;
    descripcion: string;
    categoria: string;
    subcategoria: string;
}