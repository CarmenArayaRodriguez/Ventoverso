export function transformaAProductoDetalleResponseDto(producto) {
    return {
        id: producto.id,
        nombre: producto.nombre,
        marca: producto.marca,
        modelo: producto.modelo,
        estrellas: producto.estrellas,
        imagenes: producto.imagenes,
        precio: producto.precio,
        linkDetalle: producto.linkDetalle,
        caracteristicasPrincipales: producto.caracteristicasPrincipales,
        descripcion: producto.descripcion
    };
}