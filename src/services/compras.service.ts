import { HttpException, HttpStatus, Injectable, NotFoundException, Logger } from '@nestjs/common';
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
import { Carrito } from 'src/entities/carrito.entity';
import { DetalleCompra } from 'src/entities/detalle-compra.entity';

@Injectable()
export class ComprasService {
    private readonly logger = new Logger(ComprasService.name);

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
        private metodoEnvioRepository: Repository<MetodoEnvio>,
        @InjectRepository(DetalleCompra)
        private detalleCompraRepository: Repository<DetalleCompra>,
    ) { }


    async confirmarCompra(idCliente: string, carritoId: number, datosCompra: CrearCompraDto, codigoCupon?: string): Promise<CrearCompraResponseDto> {
        this.logger.debug('Carrito ID en servicio:', carritoId);
        this.logger.debug('Confirmar Compra - Datos de compra:', datosCompra, 'Cupón:', datosCompra.codigoCupon);
        this.logger.debug('Datos de compra:', datosCompra);
        this.logger.debug(`Buscando cliente con RUT: ${idCliente}`);
        const cliente = await this.clientesRepository.findOne({ where: { rut_cliente: datosCompra.rut_cliente } });
        this.logger.log(`Iniciando proceso de confirmación de compra para el cliente ${cliente.rut_cliente} y carrito ID: ${carritoId}.`);

        this.logger.debug(`Buscando cliente con RUT: ${idCliente}.`);
        if (!cliente) {
            this.logger.warn(`Cliente no encontrado con RUT: ${idCliente}.`);
            throw new NotFoundException('Cliente no encontrado');
        } else {
            this.logger.log(`Cliente encontrado: ${cliente.nombre}.`);
        }


        const metodoPago = await this.metodoPagoRepository.findOne({ where: { id: datosCompra.metodoPagoId } });
        if (!metodoPago) {
            this.logger.warn(`Método de pago no encontrado con ID: ${datosCompra.metodoPagoId}.`);
            throw new NotFoundException('Método de pago no encontrado');
        } else {
            this.logger.log(`Método de pago encontrado: ${metodoPago.nombreMetodoPago}.`);
        }

        this.logger.debug(`Buscando método de envío con ID: ${datosCompra.idMetodoEnvio}.`);
        const metodoEnvio = await this.metodoEnvioRepository.findOne({ where: { id: datosCompra.idMetodoEnvio } });
        if (!metodoEnvio) {
            this.logger.warn(`Método de envío no encontrado con ID: ${datosCompra.idMetodoEnvio}.`);
            throw new NotFoundException('Método de envío no encontrado');
        } else {
            this.logger.log(`Método de envío encontrado: ${metodoEnvio.descripcion}.`);
        }

        if (codigoCupon) {
            this.logger.log(`Aplicando cupón al carrito ID: ${carritoId}`);
            await this.carritoService.asignarCuponACarrito(carritoId, codigoCupon);
        }


        const carrito = await this.carritoService.obtenerCarritoPorID(carritoId);
        this.logger.debug(`Carrito encontrado:`, carrito);
        this.logger.debug(`Carrito obtenido (Antes de confirmar compra): `, carrito);
        if (!carrito || carrito.productos.length === 0) {
            this.logger.warn('Carrito no encontrado o vacío');
            throw new NotFoundException('Carrito no encontrado o vacío');
        }

        let totalSinDescuento = 0;
        let productosTicket = [];

        for (const productoCarrito of carrito.productos) {
            const producto = await this.productosRepository.findOne({ where: { id: productoCarrito.productoId } });
            if (!producto) {
                throw new NotFoundException(`Producto con ID ${productoCarrito.productoId} no encontrado`);
            }

            if (producto.stock < productoCarrito.cantidad) {
                throw new HttpException({
                    status: HttpStatus.BAD_REQUEST,
                    error: `Stock insuficiente para el producto: ${producto.nombre}. Disponibles: ${producto.stock}, solicitados: ${productoCarrito.cantidad}`,
                }, HttpStatus.BAD_REQUEST);
            }

            totalSinDescuento += productoCarrito.cantidad * producto.precio;
            productosTicket.push({
                nombre: producto.nombre,
                cantidad: productoCarrito.cantidad,
                precio: producto.precio
            });
            this.logger.log(`Total sin descuento: ${totalSinDescuento}`);

            this.logger.debug(`Stock actual del producto ID ${producto.id}: ${producto.stock}`);
            producto.stock -= productoCarrito.cantidad;
            await this.productosRepository.save(producto);
            this.logger.log(`Stock actualizado del producto ID ${producto.id}: ${producto.stock}`);
        }

        const descuento = this.carritoService.obtenerDescuento(carrito);
        const subtotal = totalSinDescuento;
        const montoDescuento = descuento.montoDescuento;
        const iva = (subtotal - montoDescuento) * 0.19;
        const costoEnvio = metodoEnvio.costoEnvio;
        const totalFinal = subtotal - montoDescuento + iva + costoEnvio;

        this.logger.debug(`Total antes de envío: ${subtotal + iva}`);
        this.logger.log(`Costo de envío: ${costoEnvio}`);
        this.logger.log(`Total final con envío: ${totalFinal}`);
        this.logger.log(`Creando entidad Compra con: Cupón: ${carrito.cupon}, Cliente RUT: ${cliente.rut_cliente}`);
        const compra = this.comprasRepository.create({
            cliente: cliente,
            total: totalFinal,
            metodoPago: metodoPago,
            metodoEnvio: metodoEnvio,
            calle_numero: datosCompra.calle_numero,
            depto_casa_oficina: datosCompra.depto_casa_oficina,
            ciudad: datosCompra.ciudad,
            comuna: datosCompra.comuna,
            region: datosCompra.region,
            cuponUsado: carrito.cupon

        });
        await this.comprasRepository.save(compra);
        this.logger.log(`Compra confirmada exitosamente con ID: ${compra.id} para el cliente ${cliente.rut_cliente}.`);

        for (const productoCarrito of carrito.productos) {
            const producto = await this.productosRepository.findOne({ where: { id: productoCarrito.productoId } });
            this.logger.debug(`Producto encontrado: ${producto.nombre}, Cantidad: ${productoCarrito.cantidad}, Precio unitario: ${producto.precio}`);
            const detalle = this.detalleCompraRepository.create({
                compra: compra,
                producto: producto,
                cantidad: productoCarrito.cantidad,
                precio: producto.precio,
            });
            await this.detalleCompraRepository.save(detalle);
            this.logger.debug(`Detalle de compra guardado:`, detalle);
        }

        await this.comprasRepository.save(compra);

        this.logger.debug('ConfirmarCompra Service - carritoId:', carritoId);

        await this.carritoService.vaciarCarrito(cliente.rut_cliente);

        const respuesta = new CrearCompraResponseDto();
        respuesta.mensaje = 'Compra realizada con éxito';
        respuesta.idPedido = compra.id;
        respuesta.subtotal = subtotal;
        respuesta.montoDescuento = montoDescuento;
        respuesta.IVA = iva;
        respuesta.costoEnvio = costoEnvio;
        respuesta.total = totalFinal;
        respuesta.productos = productosTicket.map(pt => ({
            nombre: pt.nombre,
            cantidad: pt.cantidad,
            precio: pt.precio
        }));

        return respuesta;
    }


}


