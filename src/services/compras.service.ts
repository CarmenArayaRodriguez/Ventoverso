import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from 'src/entities/compra.entity';
import { CrearCompraDto } from 'src/dto/crear-compra.dto';
import { Producto } from 'src/entities/producto.entity';
import { Cliente } from 'src/entities/cliente.entity';
import { CrearCompraResponseDto } from 'src/dto/crear-compra-response.dto';
import { DetallesCompraDto } from 'src/dto/detalles-de-compra-dto';
import { CarritoService } from './carrito.service';
import { DatosEnvioDTO } from 'src/dto/datos-envio.dto';
import { MetodoPago } from 'src/entities/metodo-de-pago.entity';
import { MetodoEnvio } from 'src/entities/metodo-de-envio.entity';
import { DireccionEnvioDto } from 'src/dto/direccion-envio.dto';

@Injectable()
export class ComprasService {
    constructor(
        @InjectRepository(Compra)
        private comprasRepository: Repository<Compra>,
        @InjectRepository(Producto)
        private productosRepository: Repository<Producto>,
        @InjectRepository(Cliente)
        private clientesRepository: Repository<Cliente>,
        private carritoService: CarritoService,
        @InjectRepository(MetodoPago)
        private metodoPagoRepository: Repository<MetodoPago>,
        @InjectRepository(MetodoEnvio)
        private metodoEnvioRepository: Repository<MetodoEnvio>
    ) { }

    async crearCompra(datosCompra: CrearCompraDto): Promise<CrearCompraResponseDto> {
        console.log('Datos de Compra:', datosCompra);
        console.log('Iniciando método crearCompra');
        const producto = await this.productosRepository.findOne({ where: { id: datosCompra.id_producto } });
        console.log('Producto encontrado:', producto);
        if (!producto) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Producto no encontrado con el ID proporcionado',
            }, HttpStatus.BAD_REQUEST);
        }

        const cliente = await this.clientesRepository.findOne({ where: { rut_cliente: datosCompra.rut_cliente } });
        console.log('Cliente encontrado:', cliente);
        if (!cliente) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Cliente no encontrado con el RUT proporcionado',
            }, HttpStatus.BAD_REQUEST);
        }

        const direccionEnvio = `${cliente.direccion}, ${cliente.comuna}, ${cliente.ciudad}, ${cliente.region}`;
        console.log('Dirección de Envío:', direccionEnvio);
        const total = datosCompra.cantidad * producto.precio;
        console.log('Cliente:', cliente);
        console.log('Producto:', producto);

        if (!cliente.direccion || !cliente.comuna || !cliente.ciudad || !cliente.region) {
            console.error('Faltan datos de dirección del cliente');
            throw new HttpException('Faltan datos de dirección del cliente', HttpStatus.BAD_REQUEST);
        }


        const compra = this.comprasRepository.create({
            cliente: cliente,
            producto: producto,
            cantidad: datosCompra.cantidad,
            total: total,
            calle_numero: datosCompra.calle_numero,
            depto_casa_oficina: datosCompra.depto_casa_oficina,
        });
        console.log('Compra a guardar:', compra);
        await this.comprasRepository.save(compra);


        return { mensaje: 'Compra realizada con éxito' };

    }

    async confirmarCompra(rutCliente: string, datosCompra: CrearCompraDto): Promise<CrearCompraResponseDto> {
        console.log(datosCompra);

        const cliente = await this.clientesRepository.findOne({ where: { rut_cliente: rutCliente } });
        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado');
        }

        const carrito = await this.carritoService.verCarrito(rutCliente);
        if (!carrito || carrito.productos.length === 0) {
            throw new NotFoundException('Carrito no encontrado o vacío');
        }

        const totalCompra = carrito.resumen.totalCompra;

        const metodoPago = await this.metodoPagoRepository.findOne({
            where: { id: datosCompra.metodoPagoId }
        });;

        if (!metodoPago) {
            throw new NotFoundException('Método de pago no encontrado');
        }
        const nombreMetodoPago = metodoPago.nombreMetodoPago;
        // const direccionEnvio = DireccionEnvioDto || `${cliente.direccion}, ${cliente.comuna}, ${cliente.ciudad}, ${cliente.region}`;

        for (const productoCarrito of carrito.productos) {
            const producto = await this.productosRepository.findOne({ where: { id: productoCarrito.productoId } });
            if (!producto) {
                throw new NotFoundException(`Producto con ID ${productoCarrito.productoId} no encontrado`);
            }
            const metodoEnvio = await this.metodoEnvioRepository.findOne({
                where: { id: datosCompra.idMetodoEnvio }
            });
            const compra = this.comprasRepository.create({
                cliente: cliente,
                producto: producto,
                cantidad: productoCarrito.cantidad,
                total: productoCarrito.precio * productoCarrito.cantidad,
                metodoPago: metodoPago,
                metodoEnvio: metodoEnvio,
                calle_numero: datosCompra.calle_numero,
                depto_casa_oficina: datosCompra.depto_casa_oficina,

            });

            await this.comprasRepository.save(compra);
        }

        return {
            mensaje: 'Compra realizada con éxito',
        };
    }

}
