import { ProductoCategoria } from "../enums/producto-categoria.enum"
import { ProductoSubcategoria } from '../enums/producto-subcategoria.enum';

export const RelacionCategoriaSubcategoria = {
    [ProductoCategoria.CLARINETES]: [
        ProductoSubcategoria.CLARINETE_SIB,
        ProductoSubcategoria.CLARINETE_LA,
        ProductoSubcategoria.CLARINETE_MIB,
        ProductoSubcategoria.CAMPANAS_BARRILES,
        ProductoSubcategoria.CAÑAS_CLARINETE,
        ProductoSubcategoria.ACCESORIOS_CLARINETE,
    ]

}
