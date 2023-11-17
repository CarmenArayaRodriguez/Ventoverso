import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from 'src/entities/compra.entity';
import { CrearCompraDto } from 'src/dto/crear-compra.dto';
import { Producto } from 'src/entities/producto.entity';
import { Cliente } from 'src/entities/cliente.entity';
import { CrearCompraResponseDto } from 'src/dto/crear-compra-response.dto';
import { DetallesCompraDto } from 'src/dto/detalles-de-compra-dto';

@Injectable()
export class ComprasService {
    constructor(
        @InjectRepository(Compra)
        private comprasRepository: Repository<Compra>,
        @InjectRepository(Producto)
        private productosRepository: Repository<Producto>,
        @InjectRepository(Cliente)
        private clientesRepository: Repository<Cliente>,
    ) { }

    async crearCompra(datosCompra: CrearCompraDto): Promise<CrearCompraResponseDto> {
        const producto = await this.productosRepository.findOne({ where: { id: datosCompra.id_producto } });
        if (!producto) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Producto no encontrado con el ID proporcionado',
            }, HttpStatus.BAD_REQUEST);
        }

        const cliente = await this.clientesRepository.findOne({ where: { rut_cliente: datosCompra.rut_cliente } });
        if (!cliente) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Cliente no encontrado con el RUT proporcionado',
            }, HttpStatus.BAD_REQUEST);
        }

        const total = datosCompra.cantidad * producto.precio;

        const compra = this.comprasRepository.create({
            cliente: cliente,
            producto: producto,
            cantidad: datosCompra.cantidad,
            total: total,
        });

        await this.comprasRepository.save(compra);

        return { mensaje: 'Compra realizada con éxito' };
    }
}
