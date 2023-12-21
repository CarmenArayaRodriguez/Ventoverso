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
import { Carrito } from 'src/entities/carrito.entity';
import { DetalleCompra } from 'src/entities/detalle-compra.entity';
import { EstadoCompra } from 'src/entities/estado-compra.entity';

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
        private metodoEnvioRepository: Repository<MetodoEnvio>,
        @InjectRepository(DetalleCompra)
        private detalleCompraRepository: Repository<DetalleCompra>,
        @InjectRepository(EstadoCompra)
        private estadoCompraRepository: Repository<EstadoCompra>
    ) { }


    async confirmarCompra(idCliente: string, carritoId: number, datosCompra: CrearCompraDto, codigoCupon?: string): Promise<CrearCompraResponseDto> {
        console.log('Carrito ID en servicio:', carritoId);
        console.log('Confirmar Compra - Datos de compra:', datosCompra, 'Cupón:', datosCompra.codigoCupon);
        console.log('Datos de compra:', datosCompra);
        console.log(`Buscando cliente con RUT: ${idCliente}`);
        const cliente = await this.clientesRepository.findOne({ where: { rut_cliente: datosCompra.rut_cliente } });

        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado');
        }
        console.log('Cliente encontrado:', cliente);

        const metodoPago = await this.metodoPagoRepository.findOne({ where: { id: datosCompra.metodoPagoId } });
        if (!metodoPago) {
            throw new NotFoundException('Método de pago no encontrado');
        }
        console.log('Método de pago encontrado:', metodoPago);

        const metodoEnvio = await this.metodoEnvioRepository.findOne({ where: { id: datosCompra.idMetodoEnvio } });
        if (!metodoEnvio) {
            throw new NotFoundException('Método de envío no encontrado');
        }
        console.log('Método de envío encontrado:', metodoEnvio);

        if (codigoCupon) {
            console.log(`Aplicando cupón al carrito ID: ${carritoId}`);
            await this.carritoService.asignarCuponACarrito(carritoId, codigoCupon);
        }


        const carrito = await this.carritoService.obtenerCarritoPorID(carritoId);
        console.log(`Carrito encontrado:`, carrito);
        console.log(`Carrito obtenido (Antes de confirmar compra): `, carrito);
        if (!carrito || carrito.productos.length === 0) {
            console.error('Carrito no encontrado o vacío');
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
            console.log(`Total sin descuento: ${totalSinDescuento}`);

            console.log(`Stock actual del producto ID ${producto.id}: ${producto.stock}`);
            producto.stock -= productoCarrito.cantidad;
            await this.productosRepository.save(producto);
            console.log(`Stock actualizado del producto ID ${producto.id}: ${producto.stock}`);
        }

        const descuento = this.carritoService.obtenerDescuento(carrito);
        const subtotal = totalSinDescuento;
        const montoDescuento = descuento.montoDescuento;
        const iva = (subtotal - montoDescuento) * 0.19;
        const totalFinal = subtotal - montoDescuento + iva;

        console.log(`Total final (con IVA): ${totalFinal}`);
        console.log(`Creando entidad Compra con: Cupón: ${carrito.cupon}, Cliente RUT: ${cliente.rut_cliente}`);
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
        console.log('Compra creada:', compra);

        for (const productoCarrito of carrito.productos) {
            const producto = await this.productosRepository.findOne({ where: { id: productoCarrito.productoId } });
            console.log(`Producto encontrado: ${producto.nombre}, Cantidad: ${productoCarrito.cantidad}, Precio unitario: ${producto.precio}`);
            const detalle = this.detalleCompraRepository.create({
                compra: compra,
                producto: producto,
                cantidad: productoCarrito.cantidad,
                precio: producto.precio,
            });
            await this.detalleCompraRepository.save(detalle);
            console.log(`Detalle de compra guardado:`, detalle);
        }

        const estadoEntregado = await this.estadoCompraRepository.findOne({ where: { estado: 'Entregado' } });
        compra.estado = estadoEntregado;
        await this.comprasRepository.save(compra);
        console.log('Compra guardada con estado:', compra);

        console.log('ConfirmarCompra Service - carritoId:', carritoId);

        await this.carritoService.vaciarCarrito(carritoId);

        const respuesta = new CrearCompraResponseDto();
        respuesta.mensaje = 'Compra realizada con éxito';
        respuesta.idPedido = compra.id;
        respuesta.subtotal = subtotal;
        respuesta.montoDescuento = montoDescuento;
        respuesta.IVA = iva;
        respuesta.total = totalFinal;
        respuesta.productos = productosTicket.map(pt => ({
            nombre: pt.nombre,
            cantidad: pt.cantidad,
            precio: pt.precio
        }));

        return respuesta;
    }


}


