import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../entities/producto.entity';
import { ProductoDetalleResponseDTO } from '../dto/producto-detalle-response.dto';
import { ProductoMapper } from 'src/mappers/producto.mapper';
import { CrearProductoDTO } from 'src/dto/crear-producto.dto';
import { ActualizarProductoDTO } from 'src/dto/actualizar-producto.dto';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) { }

    async obtenerDetalleProducto(id: number): Promise<ProductoDetalleResponseDTO> {
        const producto = await this.productoRepository.findOne({
            where: { id },
            relations: ['categoria', 'marca', 'imagenes'],
        });

        if (!producto) {
            throw new NotFoundException('Producto no encontrado');
        }

        return ProductoMapper.toDto(producto);
    }
    async crearProducto(crearProductoDto: CrearProductoDTO): Promise<ProductoDetalleResponseDTO> {
        const nuevoProducto = this.productoRepository.create(crearProductoDto);
        await this.productoRepository.save(nuevoProducto);
        return ProductoMapper.toDto(nuevoProducto);
    }

    async actualizarProducto(id: number, actualizarProductoDto: ActualizarProductoDTO): Promise<ProductoDetalleResponseDTO> {
        const producto = await this.productoRepository.preload({
            id: id,
            ...actualizarProductoDto,
        });

        if (!producto) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }

        await this.productoRepository.save(producto);
        return ProductoMapper.toDto(producto);
    }

    async eliminarProducto(id: number): Promise<void> {
        const resultado = await this.productoRepository.delete(id);
        if (resultado.affected === 0) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
    }
}















