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

    private obtenerDescuento(carrito: Carrito): DescuentoResponseDTO {
        const cuponAplicado = carrito.cupon;
        if (cuponAplicado === 'DESC10') {
            const porcentajeDescuento = 0.10; // 10%
            const montoDescuento = carrito.subtotal * porcentajeDescuento;
            const nuevoSubtotal = carrito.subtotal - montoDescuento;
            const nuevoIVA = nuevoSubtotal * 0.19;
            const nuevoTotal = nuevoSubtotal + nuevoIVA;
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
            creacionDate: new Date()
        });
        const carritoGuardado = await this.carritoRepository.save(nuevoCarrito);
        console.log('crearCarrito - carritoGuardado:', carritoGuardado);
        return carritoGuardado;
    }

    async agregarProductoAlCarrito(
        agregarProductoDTO: AgregarProductoCarritoRequestDTO,
    ): Promise<ProductoCarrito> {
        let carrito = await this.carritoRepository.findOne({ where: { id: agregarProductoDTO.carritoId } });

        if (!carrito) {
            carrito = await this.crearCarrito(agregarProductoDTO.rutCliente);
        }

        const productoCarrito = this.productoCarritoRepository.create({
            carritoId: carrito.id,
            productoId: agregarProductoDTO.productoId,
            cantidad: agregarProductoDTO.cantidad
        });
        const producto = await this.productoRepository.findOne({ where: { id: agregarProductoDTO.productoId } });
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${agregarProductoDTO.productoId} no encontrado`);
        }
        carrito.subtotal += producto.precio * agregarProductoDTO.cantidad;
        await this.carritoRepository.save(carrito);

        return this.productoCarritoRepository.save(productoCarrito);
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

        return {
            montoDescuento: montoDescuento,
            nuevoSubtotal: nuevoSubtotal,
            nuevoIVA: nuevoIVA,
            nuevoTotal: nuevoTotal
        };
    }

    async aplicarCuponAlCarrito(idCarrito: number, cupon: string): Promise<Carrito> {
        const carrito = await this.carritoRepository.findOne({ where: { id: idCarrito } });
        if (!carrito) {
            throw new NotFoundException('Carrito no encontrado');
        }

        try {
            const descuento = await this.aplicarDescuentoAlCarrito(carrito.subtotal, cupon);
            carrito.cupon = cupon;
            carrito.subtotal = descuento.nuevoSubtotal;
            await this.carritoRepository.save(carrito);

            return carrito;
        } catch (error) {

            throw error;
        }
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

    async vaciarCarrito(rutCliente: string): Promise<void> {

        const itemsCarrito = await this.carritoRepository.find({
            where: { rutCliente: rutCliente }
        });


        if (itemsCarrito.length > 0) {
            await this.carritoRepository.remove(itemsCarrito);
        }
    }

}
