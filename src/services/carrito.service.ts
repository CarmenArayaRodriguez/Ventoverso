import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from 'src/entities/carrito.entity';
import { ProductoCarrito } from 'src/entities/producto-carrito.entity';
import { AgregarProductoCarritoRequestDTO } from 'src/dto/agregar-producto-carrito-request.dto';
import { ActualizarProductoCarritoDTO } from 'src/dto/actualizar-producto-carrito.dto';

@Injectable()
export class CarritoService {
    constructor(
        @InjectRepository(Carrito)
        private carritoRepository: Repository<Carrito>,
        @InjectRepository(ProductoCarrito)
        private productoCarritoRepository: Repository<ProductoCarrito>
    ) { }


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
}
