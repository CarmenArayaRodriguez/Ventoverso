export interface IProductoNuevo {
    id: string;
    nombre: string;
    marca: string;
    modelo: string;
    estrellas: number;
    imagenes: string[];
    precio: number;
    caracteristicasPrincipales: string;
    descripcion: string;
    categoria: string;
    subcategoria: string;
}