import { HttpException, HttpStatus, Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from 'src/entities/compra.entity';
import { CrearCompraDto } from 'src/dto/crear-compra.dto';
import { Producto } from 'src/entities/producto.entity';
import { Cliente } from 'src/entities/cliente.entity';
import { CrearCompraResponseDto } from 'src/dto/crear-compra-response.dto';
import { CarritoService } from './carrito.service';
import { MetodoPago } from 'src/entities/metodo-de-pago.entity';
import { MetodoEnvio } from 'src/entities/metodo-de-envio.entity';
import { DetalleCompra } from 'src/entities/detalle-compra.entity';
import { DireccionEnvio } from 'src/entities/direccion-envio.entity';
import { Ciudad } from 'src/entities/ciudad.entity';
import { Comuna } from 'src/entities/comuna.entity';
import { Region } from 'src/entities/region.entity';

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
        @InjectRepository(DireccionEnvio)
        private direccionEnvioRepository: Repository<DireccionEnvio>,
        @InjectRepository(Ciudad)
        private ciudadRepository: Repository<Ciudad>,
        @InjectRepository(Comuna)
        private comunaRepository: Repository<Comuna>,
        @InjectRepository(Region)
        private regionRepository: Repository<Region>,
    ) { }


    async confirmarCompra(idCliente: string, carritoId: number, datosCompra: CrearCompraDto, codigoCupon?: string): Promise<CrearCompraResponseDto> {
        // Registro inicial en el log para seguimiento.
        this.logger.debug('Carrito ID en servicio:', carritoId);
        this.logger.debug('Confirmar Compra - Datos de compra:', datosCompra, 'Cupón:', datosCompra.codigoCupon);
        this.logger.debug('Datos de compra:', datosCompra);
        this.logger.debug(`Buscando cliente con RUT: ${idCliente}`);

        // Búsqueda y validación del cliente.
        const cliente = await this.clientesRepository.findOne({ where: { rut_cliente: datosCompra.rut_cliente } });
        this.logger.log(`Iniciando proceso de confirmación de compra para el cliente ${cliente.rut_cliente} y carrito ID: ${carritoId}.`);

        this.logger.debug(`Buscando cliente con RUT: ${idCliente}.`);

        // Si no se encuentra el cliente, se lanza una excepción.
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

        // Validación y aplicación de cupón de descuento si existe.
        if (codigoCupon) {
            this.logger.log(`Aplicando cupón al carrito ID: ${carritoId}`);
            // Intenta aplicar el cupón al carrito. 
            await this.carritoService.asignarCuponACarrito(carritoId, codigoCupon);
        }

        // Recuperación y validación del carrito de compras.
        const carrito = await this.carritoService.obtenerCarritoPorID(carritoId);
        this.logger.debug(`Carrito encontrado:`, carrito);
        this.logger.debug(`Carrito obtenido (Antes de confirmar compra): `, carrito);
        // Si no se encuentra el carrito o está vacío, se lanza una excepción.
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


        const direccionEnvio = new DireccionEnvio();
        direccionEnvio.rut_cliente = cliente.rut_cliente;
        direccionEnvio.calle_numero = datosCompra.calle_numero;
        direccionEnvio.depto_casa_oficina = datosCompra.depto_casa_oficina;

        direccionEnvio.ciudad = await this.ciudadRepository.findOne({ where: { id: datosCompra.ciudad } });
        direccionEnvio.comuna = await this.comunaRepository.findOne({ where: { id: datosCompra.comuna } });
        direccionEnvio.regionEnvio = await this.regionRepository.findOne({ where: { id: datosCompra.region } });

        await this.direccionEnvioRepository.save(direccionEnvio);

        // Crea y guarda una nueva entidad de compra con los detalles calculados.
        const compra = this.comprasRepository.create({
            cliente: cliente,
            total: totalFinal,
            metodoPago: metodoPago,
            metodoEnvio: metodoEnvio,
            direccionEnvio: direccionEnvio,
            cuponUsado: carrito.cupon

        });
        await this.comprasRepository.save(compra);
        this.logger.log(`Compra confirmada exitosamente con ID: ${compra.id} para el cliente ${cliente.rut_cliente}.`);

        // Crea y guarda los detalles de cada producto en la compra.
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

        // Vacía el carrito después de confirmar la compra.
        await this.carritoService.vaciarCarrito(cliente.rut_cliente);

        // Prepara y retorna la respuesta DTO con los detalles de la compra.
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


