import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from 'src/entities/carrito.entity';
import { ProductoCarrito } from 'src/entities/producto-carrito.entity';
import { AgregarProductoCarritoRequestDTO } from 'src/dto/agregar-producto-carrito-request.dto';
import { ActualizarProductoCarritoDTO } from 'src/dto/actualizar-producto-carrito.dto';
import { CarritoConProductosResponseDTO } from 'src/dto/carrito-con-productos-response.dto';
import { DescuentoResponseDTO } from 'src/dto/descuento-response.dto';
import { ProductoEnCarritoResponseDTO } from 'src/dto/producto-en-carrito-response.dto';
import { Producto } from 'src/entities/producto.entity';

@Injectable()
export class CarritoService {
    constructor(
        @InjectRepository(Carrito)
        private carritoRepository: Repository<Carrito>,
        @InjectRepository(ProductoCarrito)
        private productoCarritoRepository: Repository<ProductoCarrito>,
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) { }

    private async convertirProductoACarritoDTO(productoCarrito: ProductoCarrito): Promise<ProductoEnCarritoResponseDTO> {
        const producto = await this.productoRepository.findOne({
            where: { id: productoCarrito.productoId },
            relations: ['marca', 'imagenes']
        });
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${productoCarrito.productoId} no encontrado`);
        }

        return {
            productoId: productoCarrito.productoId,
            marca: producto.marca.marca,
            modelo: producto.modelo,
            precio: producto.precio,
            cantidad: productoCarrito.cantidad,
            imagenUrl: producto.imagenes[0]?.imagen || ''
        };
    }


    private async calcularResumenDeCompra(productosCarrito: ProductoCarrito[]): Promise<any> {
        let subtotal = 0;

        for (const productoCarrito of productosCarrito) {
            const producto = await this.productoRepository.findOne({ where: { id: productoCarrito.productoId } });
            if (!producto) {
                throw new NotFoundException(`Producto con ID ${productoCarrito.productoId} no encontrado`);
            }
            subtotal += productoCarrito.cantidad * producto.precio;
        }

        const iva = subtotal * 0.19;
        const total = subtotal + iva;

        return {
            subtotal,
            iva,
            total
        };

    }

    async asignarCuponACarrito(idCarrito: number, cupon: string): Promise<Carrito> {
        console.log(`Asignando cupón ${cupon} al carrito ${idCarrito}`);
        const carrito = await this.carritoRepository.findOne({ where: { id: idCarrito } });
        if (!carrito) {
            throw new NotFoundException(`Carrito con ID ${idCarrito} no encontrado`);
        }
        console.log(`Cupón actual en el carrito antes de asignar: ${carrito.cupon}`);

        carrito.cupon = cupon;
        await this.carritoRepository.save(carrito);
        console.log(`Cupón asignado al carrito: ${carrito.cupon}`);
        console.log(`Cupón asignado al carrito (Después de guardar): ${carrito.cupon}`);
        return carrito;
    }

    public obtenerDescuento(carrito: Carrito): DescuentoResponseDTO {
        console.log(`Carrito recibido para calcular descuento:`, carrito);
        const cuponAplicado = carrito.cupon;
        if (cuponAplicado === 'DESC10') {
            const porcentajeDescuento = 0.10; // 10%
            const montoDescuento = carrito.subtotal * porcentajeDescuento;
            console.log(`Cupón aplicado: ${cuponAplicado}, Porcentaje de descuento: ${porcentajeDescuento}, Monto del descuento: ${montoDescuento}`);
            const nuevoSubtotal = carrito.subtotal - montoDescuento;
            const nuevoIVA = nuevoSubtotal * 0.19;
            const nuevoTotal = nuevoSubtotal + nuevoIVA;

            console.log(`Cupón aplicado: ${carrito.cupon}, Porcentaje de descuento: ${porcentajeDescuento}, Monto del descuento: ${montoDescuento}`);
            console.log(`Nuevo subtotal después del descuento: ${nuevoSubtotal}, Nuevo IVA: ${nuevoIVA}, Nuevo total: ${nuevoTotal}`);
            return {
                montoDescuento: montoDescuento,
                nuevoSubtotal: carrito.subtotal - montoDescuento,
                nuevoIVA: nuevoIVA,
                nuevoTotal: nuevoTotal

            };
        }


        return {
            montoDescuento: 0,
            nuevoSubtotal: carrito.subtotal,
            nuevoIVA: carrito.subtotal * 0.19,
            nuevoTotal: carrito.subtotal + (carrito.subtotal * 0.19)
        };
    }


    async crearCarrito(rutCliente: string): Promise<Carrito> {
        console.log('crearCarrito - rutCliente:', rutCliente);
        const nuevoCarrito = this.carritoRepository.create({
            rutCliente,
            statusCarrito: 'activo',
            creacionDate: new Date(),
            subtotal: 0
        });
        const carritoGuardado = await this.carritoRepository.save(nuevoCarrito);
        console.log('crearCarrito - carritoGuardado:', carritoGuardado);
        return carritoGuardado;
    }


    async agregarProductoAlCarrito(
        agregarProductoDTO: AgregarProductoCarritoRequestDTO,
    ): Promise<ProductoCarrito> {
        console.log('DTO AgregarProductoCarrito:', agregarProductoDTO);
        console.log(`Buscando carrito con ID: ${agregarProductoDTO.carritoId}`);
        let carrito = await this.carritoRepository.findOne({ where: { id: agregarProductoDTO.carritoId } });

        console.log(`Buscando producto con ID: ${agregarProductoDTO.productoId}`);
        const producto = await this.productoRepository.findOne({ where: { id: agregarProductoDTO.productoId } });
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${agregarProductoDTO.productoId} no encontrado`);
        }
        console.log('Producto encontrado:', producto);

        if (producto.stock < agregarProductoDTO.cantidad) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: `Stock insuficiente para el producto: ${producto.nombre}. Disponibles: ${producto.stock}, solicitados: ${agregarProductoDTO.cantidad}`,
            }, HttpStatus.BAD_REQUEST);
        }

        if (!carrito) {
            console.log('Carrito no encontrado, creando un nuevo carrito y agregando el producto...');
            carrito = this.carritoRepository.create({
                rutCliente: agregarProductoDTO.rutCliente,
                statusCarrito: 'activo',
                creacionDate: new Date(),
                subtotal: producto.precio * agregarProductoDTO.cantidad
            });
            await this.carritoRepository.save(carrito);
            console.log('Nuevo carrito creado:', carrito);
        } else {
            console.log(`Carrito existente encontrado. ID del Carrito: ${carrito.id}`);
            carrito.subtotal = (carrito.subtotal || 0) + producto.precio * agregarProductoDTO.cantidad;
            await this.carritoRepository.save(carrito);
            console.log(`Subtotal actualizado del carrito: ${carrito.subtotal}`);
        }

        console.log(`Agregando producto al carrito. ID del Carrito: ${carrito.id}, ID del Producto: ${agregarProductoDTO.productoId}, Cantidad: ${agregarProductoDTO.cantidad}`);
        const productoCarrito = this.productoCarritoRepository.create({
            carritoId: carrito.id,
            productoId: agregarProductoDTO.productoId,
            cantidad: agregarProductoDTO.cantidad
        });
        await this.productoCarritoRepository.save(productoCarrito);

        return productoCarrito;
    }


    async actualizarProductoEnCarrito(actualizarCantidadDTO: ActualizarProductoCarritoDTO): Promise<ProductoCarrito> {
        const { carritoId, productoId, cantidad } = actualizarCantidadDTO;

        const productoCarrito = await this.productoCarritoRepository.findOne({ where: { carritoId: carritoId, productoId: productoId } });
        if (!productoCarrito) {
            throw new NotFoundException('Producto no encontrado en el carrito');
        }

        productoCarrito.cantidad = cantidad;
        return this.productoCarritoRepository.save(productoCarrito);
    }


    async eliminarProductoDelCarrito(idCarrito: number, idProducto: number): Promise<void> {
        console.log(`Intentando eliminar producto. ID del Carrito: ${idCarrito}, ID del Producto: ${idProducto}`);
        const resultado = await this.productoCarritoRepository.delete({
            carritoId: idCarrito,
            productoId: idProducto
        });
        console.log('Resultado de la eliminación:', resultado);

        if (resultado.affected === 0) {
            throw new NotFoundException('Producto no encontrado en el carrito');
        }
    }
    async verCarrito(rutCliente: string): Promise<CarritoConProductosResponseDTO> {
        const carrito = await this.carritoRepository.findOne({
            where: { rutCliente: rutCliente },
            relations: ['productos']
        });
        console.log(`Carrito para cliente ${rutCliente}:`, carrito);


        if (!carrito) {
            throw new NotFoundException('Carrito no encontrado');
        }

        const productosEnCarritoResponsePromesas = carrito.productos.map(async (producto) => {
            return this.convertirProductoACarritoDTO(producto);
        });
        const productosEnCarritoResponse = await Promise.all(productosEnCarritoResponsePromesas);

        const resumenCompra = await this.calcularResumenDeCompra(carrito.productos);
        const descuentoAplicado = this.obtenerDescuento(carrito);

        return {
            carritoId: carrito.id.toString(),
            productos: productosEnCarritoResponse,
            resumen: resumenCompra,
            descuento: descuentoAplicado
        };
    }

    async aplicarDescuentoAlCarrito(subtotal: number, cupon: string): Promise<DescuentoResponseDTO> {
        console.log(`Aplicando descuento. Subtotal: ${subtotal}, Cupón: ${cupon}`);
        if (cupon !== 'DESC10') {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Cupón de descuento no válido',
            }, HttpStatus.BAD_REQUEST);
        }

        const porcentajeDescuento = 0.10; // 10%
        const montoDescuento = subtotal * porcentajeDescuento;
        const nuevoSubtotal = subtotal - montoDescuento;
        const nuevoIVA = nuevoSubtotal * 0.19; // IVA de 19%
        const nuevoTotal = nuevoSubtotal + nuevoIVA;

        console.log(`Descuento aplicado. Nuevo subtotal: ${nuevoSubtotal}, Nuevo total: ${nuevoTotal}`);

        return {
            montoDescuento: montoDescuento,
            nuevoSubtotal: nuevoSubtotal,
            nuevoIVA: nuevoIVA,
            nuevoTotal: nuevoTotal
        };
    }

    async eliminarCarrito(idCarrito: number): Promise<void> {
        console.log(`Intentando eliminar carrito con ID: ${idCarrito}`);
        const carrito = await this.carritoRepository.findOne({ where: { id: idCarrito } });
        if (!carrito) {
            console.log('Carrito no encontrado');
            throw new NotFoundException('Carrito no encontrado');
        }

        await this.productoCarritoRepository.delete({ carritoId: idCarrito });
        await this.carritoRepository.delete({ id: idCarrito });
        console.log(`Carrito con ID: ${idCarrito} eliminado`);
    }

    async obtenerCarritoPorCliente(rutCliente: string): Promise<Carrito> {
        const carrito = await this.carritoRepository.findOne({
            where: { rutCliente },
        });

        if (!carrito) {
            throw new NotFoundException('Carrito no encontrado para el cliente.');
        }

        return carrito;
    }


    async obtenerCarritoPorID(idCarrito: number): Promise<Carrito> {
        console.log(`Obteniendo carrito con ID: ${idCarrito}`);
        const carrito = await this.carritoRepository.findOne({
            where: { id: idCarrito },
            relations: ['productos']
        });
        console.log('Carrito encontrado:', carrito);
        if (!carrito) {
            throw new NotFoundException(`Carrito con ID ${idCarrito} no encontrado`);
        }

        return carrito;
    }

    // async vaciarCarrito(rutCliente: string): Promise<void> {

    //     const itemsCarrito = await this.carritoRepository.find({
    //         where: { rutCliente: rutCliente }
    //     });


    //     if (itemsCarrito.length > 0) {
    //         await this.carritoRepository.remove(itemsCarrito);
    //     }
    // }
    async vaciarCarrito(carritoId: number): Promise<void> {
        // Obtener el carrito con sus productos asociados
        const carrito = await this.carritoRepository.findOne({
            where: { id: carritoId },
            relations: ['productos'] // Asume que 'productos' es el campo que contiene los productos del carrito
        });
        console.log('VaciarCarrito - carritoId:', carritoId);
        if (!carrito) {
            throw new NotFoundException(`Carrito con ID ${carritoId} no encontrado`);
        }

        // Si el carrito tiene productos, eliminarlos primero
        if (carrito.productos && carrito.productos.length > 0) {
            // Asumiendo que tienes un método en tu servicio para eliminar productos del carrito
            // Este método debería encargarse de eliminar las relaciones en la base de datos
            await Promise.all(carrito.productos.map(producto =>
                this.eliminarProductoDelCarrito(carritoId, producto.id)
            ));
        }
    }
}