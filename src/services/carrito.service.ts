// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Carrito } from '../carrito-de-compras/entities/carrito.entity';
// import { ProductoCarrito } from '../carrito-de-compras/entities/producto-carrito.entity';
// // Importa los repositorios y DTOs necesarios

// @Injectable()
// export class CarritoDeComprasService {
//     constructor(
//         private carritoRepository: CarritoRepository, // Asume que tienes este repositorio
//         private productoCarritoRepository: ProductoCarritoRepository // Y este también
//     ) { }

//     async crearCarrito(userId: string): Promise<Carrito> {
//         const carrito = new Carrito();
//         carrito.userId = userId;
//         return this.carritoRepository.save(carrito);
//     }

//     async agregarProducto(carritoId: string, productoId: string, cantidad: number): Promise<ProductoCarrito> {
//         const carrito = await this.carritoRepository.findOne(carritoId);
//         if (!carrito) {
//             throw new NotFoundException(`Carrito no encontrado con ID: ${carritoId}`);
//         }

//         let productoCarrito = await this.productoCarritoRepository.findOne({ where: { carrito, productoId } });
//         if (productoCarrito) {
//             productoCarrito.cantidad += cantidad;
//         } else {
//             productoCarrito = new ProductoCarrito();
//             productoCarrito.carrito = carrito;
//             productoCarrito.productoId = productoId;
//             productoCarrito.cantidad = cantidad;
//         }
//         return this.productoCarritoRepository.save(productoCarrito);
//     }

//     async actualizarProducto(carritoId: string, productoId: string, cantidad: number): Promise<ProductoCarrito> {
//         const productoCarrito = await this.productoCarritoRepository.findOne({ where: { carritoId, productoId } });
//         if (!productoCarrito) {
//             throw new NotFoundException(`Producto no encontrado en el carrito con ID: ${carritoId}`);
//         }
//         productoCarrito.cantidad = cantidad;
//         return this.productoCarritoRepository.save(productoCarrito);
//     }

//     async eliminarProducto(carritoId: string, productoId: string): Promise<void> {
//         const resultado = await this.productoCarritoRepository.delete({ carritoId, productoId });
//         if (resultado.affected === 0) {
//             throw new NotFoundException(`Producto no encontrado en el carrito con ID: ${carritoId}`);
//         }
//     }
// }
