export function transformaAProductoNuevoResponseDto(producto) {
    return {
        id: producto.id,
        nombre: producto.nombre,
        marca: producto.marca,
        modelo: producto.modelo,
        imagenes: producto.imagenes,
        precio: producto.precio,
        caracteristicasPrincipales: producto.caracteristicasPrincipales,
        descripcion: producto.descripcion
    };
}
