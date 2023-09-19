export interface IProductoNuevo {
    id: string;
    nombre: string;
    marca: string;
    modelo: string;
    imagenes: string[];
    precio: number;
    caracteristicasPrincipales: string;
    descripcion: string;
    categoria: string;
    subcategoria: string;
}