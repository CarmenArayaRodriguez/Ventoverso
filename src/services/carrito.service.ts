import { HttpException, HttpStatus, Injectable, NotFoundException, Logger } from '@nestjs/common';
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
    private readonly logger = new Logger(CarritoService.name);

    constructor(
        @InjectRepository(Carrito)
        private carritoRepository: Repository<Carrito>,
        @InjectRepository(ProductoCarrito)
        private productoCarritoRepository: Repository<ProductoCarrito>,
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) { }

    private async convertirProductoACarritoDTO(productoCarrito: ProductoCarrito): Promise<ProductoEnCarritoResponseDTO> {
        // Obtener detalles del producto desde la base de datos.
        // Incluye relaciones necesarias para obtener información completa del producto.
        const producto = await this.productoRepository.findOne({
            where: { id: productoCarrito.productoId },
            relations: ['marca', 'imagenes']
        });

        // Si no se encuentra el producto, se lanza una excepción.
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${productoCarrito.productoId} no encontrado`);
        }

        // Convertir entidad productoCarrito a DTO con la información necesaria para el front-end.
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
        // Inicializar subtotal a 0.
        let subtotal = 0;

        // Calcular el subtotal iterando cada producto en el carrito.
        for (const productoCarrito of productosCarrito) {
            const producto = await this.productoRepository.findOne({ where: { id: productoCarrito.productoId } });

            // Si un producto no se encuentra, se lanza una excepción.
            if (!producto) {
                throw new NotFoundException(`Producto con ID ${productoCarrito.productoId} no encontrado`);
            }

            // Sumar al subtotal: cantidad del producto * precio del producto.
            subtotal += productoCarrito.cantidad * producto.precio;
        }

        // Calcular IVA y total con base en el subtotal calculado.
        const iva = subtotal * 0.19; // IVA de 19% aplicado.
        const total = subtotal + iva;

        return {
            subtotal,
            iva,
            total
        };

    }

    async asignarCuponACarrito(idCarrito: number, cupon: string): Promise<Carrito> {
        this.logger.debug(`Asignando cupón ${cupon} al carrito ${idCarrito}`);
        // Buscar el carrito por ID para asignarle un cupón.
        const carrito = await this.carritoRepository.findOne({ where: { id: idCarrito } });

        // Si el carrito no existe, se lanza una excepción.
        if (!carrito) {
            throw new NotFoundException(`Carrito con ID ${idCarrito} no encontrado`);
        }
        this.logger.debug(`Cupón actual en el carrito antes de asignar: ${carrito.cupon}`);

        // Asignar cupón al carrito y guardar en base de datos.
        carrito.cupon = cupon;
        await this.carritoRepository.save(carrito);
        this.logger.debug(`Cupón asignado al carrito: ${carrito.cupon}`);
        this.logger.debug(`Cupón asignado al carrito (Después de guardar): ${carrito.cupon}`);
        return carrito;
    }

    public obtenerDescuento(carrito: Carrito): DescuentoResponseDTO {
        // Este método calcula el descuento basado en el cupón aplicado al carrito.
        // Actualmente solo soporta un cupón de ejemplo 'DESC10'.
        this.logger.debug(`Carrito recibido para calcular descuento:`, carrito);
        // Si el cupón aplicado es 'DESC10', calcular el descuento.
        const cuponAplicado = carrito.cupon;
        if (cuponAplicado === 'DESC10') {
            const porcentajeDescuento = 0.10; // 10% de descuento
            // Calcular montos de descuento y nuevos totales.
            const montoDescuento = carrito.subtotal * porcentajeDescuento;
            this.logger.debug(`Cupón aplicado: ${cuponAplicado}, Porcentaje de descuento: ${porcentajeDescuento}, Monto del descuento: ${montoDescuento}`);
            const nuevoSubtotal = carrito.subtotal - montoDescuento;
            const nuevoIVA = nuevoSubtotal * 0.19;
            const nuevoTotal = nuevoSubtotal + nuevoIVA;

            this.logger.debug(`Cupón aplicado: ${carrito.cupon}, Porcentaje de descuento: ${porcentajeDescuento}, Monto del descuento: ${montoDescuento}`);
            this.logger.debug(`Nuevo subtotal después del descuento: ${nuevoSubtotal}, Nuevo IVA: ${nuevoIVA}, Nuevo total: ${nuevoTotal}`);
            return {
                montoDescuento: montoDescuento,
                nuevoSubtotal: carrito.subtotal - montoDescuento,
                nuevoIVA: nuevoIVA,
                nuevoTotal: nuevoTotal

            };
        }

        // Si no se aplica ningún descuento, retornar valores originales.
        return {
            montoDescuento: 0,
            nuevoSubtotal: carrito.subtotal,
            nuevoIVA: carrito.subtotal * 0.19,
            nuevoTotal: carrito.subtotal + (carrito.subtotal * 0.19)
        };
    }

    async agregarProductoAlCarrito(
        agregarProductoDTO: AgregarProductoCarritoRequestDTO,
    ): Promise<ProductoCarrito> {
        this.logger.debug('DTO AgregarProductoCarrito:', agregarProductoDTO);

        let carrito = await this.carritoRepository.findOne({
            where: {
                rutCliente: agregarProductoDTO.rutCliente,
                statusCarrito: 'activo'
            }
        });

        this.logger.debug(`Buscando producto con ID: ${agregarProductoDTO.productoId}`);
        const producto = await this.productoRepository.findOne({ where: { id: agregarProductoDTO.productoId } });
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${agregarProductoDTO.productoId} no encontrado`);
        }
        this.logger.debug('Producto encontrado:', producto);

        if (producto.stock < agregarProductoDTO.cantidad) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: `Stock insuficiente para el producto: ${producto.nombre}. Disponibles: ${producto.stock}, solicitados: ${agregarProductoDTO.cantidad}`,
            }, HttpStatus.BAD_REQUEST);
        }

        if (!carrito) {
            this.logger.warn('Carrito no encontrado, creando un nuevo carrito y agregando el producto...');
            carrito = this.carritoRepository.create({
                rutCliente: agregarProductoDTO.rutCliente,
                statusCarrito: 'activo',
                creacionDate: new Date(),
                subtotal: 0
            });
            await this.carritoRepository.save(carrito);
            this.logger.log('Nuevo carrito creado:', carrito);
            this.logger.log(`Agregando producto ID: ${agregarProductoDTO.productoId} al nuevo carrito ID: ${carrito.id}`);
        }

        this.logger.debug(`Carrito encontrado o creado. ID del Carrito: ${carrito.id}`);
        carrito.subtotal = (carrito.subtotal || 0) + producto.precio * agregarProductoDTO.cantidad;
        await this.carritoRepository.save(carrito);
        this.logger.log(`Subtotal actualizado del carrito: ${carrito.subtotal}`);

        this.logger.debug(`Agregando producto al carrito. ID del Carrito: ${carrito.id}, ID del Producto: ${agregarProductoDTO.productoId}, Cantidad: ${agregarProductoDTO.cantidad}`);

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
        this.logger.debug(`Intentando eliminar producto. ID del Carrito: ${idCarrito}, ID del Producto: ${idProducto}`);
        const resultado = await this.productoCarritoRepository.delete({
            carritoId: idCarrito,
            productoId: idProducto
        });
        this.logger.debug('Resultado de la eliminación:', resultado);

        if (resultado.affected === 0) {
            throw new NotFoundException('Producto no encontrado en el carrito');
        }
    }
    async verCarrito(rutCliente: string): Promise<CarritoConProductosResponseDTO> {
        const carrito = await this.carritoRepository.findOne({
            where: { rutCliente: rutCliente },
            relations: ['productos']
        });
        this.logger.debug(`Carrito para cliente ${rutCliente}:`, carrito);


        if (!carrito) {
            this.logger.warn('Carrito no encontrado para cliente:', rutCliente);
            throw new NotFoundException('Carrito no encontrado');
        }

        const productosEnCarritoResponsePromesas = carrito.productos.map(async (producto) => {
            return this.convertirProductoACarritoDTO(producto);
        });
        const productosEnCarritoResponse = await Promise.all(productosEnCarritoResponsePromesas);

        const resumenCompra = await this.calcularResumenDeCompra(carrito.productos);
        const descuentoAplicado = this.obtenerDescuento(carrito);

        return {
            carritoId: carrito.id,
            productos: productosEnCarritoResponse,
            resumen: resumenCompra,
            descuento: descuentoAplicado
        };
    }

    async aplicarDescuentoAlCarrito(subtotal: number, cupon: string): Promise<DescuentoResponseDTO> {
        this.logger.debug(`Aplicando descuento. Subtotal: ${subtotal}, Cupón: ${cupon}`);
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

        this.logger.debug(`Descuento aplicado. Nuevo subtotal: ${nuevoSubtotal}, Nuevo total: ${nuevoTotal}`);

        return {
            montoDescuento: montoDescuento,
            nuevoSubtotal: nuevoSubtotal,
            nuevoIVA: nuevoIVA,
            nuevoTotal: nuevoTotal
        };
    }

    async eliminarCarrito(idCarrito: number): Promise<void> {
        this.logger.debug(`Intentando eliminar carrito con ID: ${idCarrito}`);
        const carrito = await this.carritoRepository.findOne({ where: { id: idCarrito } });
        if (!carrito) {
            this.logger.warn('Carrito no encontrado');
            throw new NotFoundException('Carrito no encontrado');
        }

        await this.productoCarritoRepository.delete({ carritoId: idCarrito });
        await this.carritoRepository.delete({ id: idCarrito });
        this.logger.log(`Carrito con ID: ${idCarrito} eliminado`);
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
        this.logger.debug(`Obteniendo carrito con ID: ${idCarrito}`);
        const carrito = await this.carritoRepository.findOne({
            where: { id: idCarrito },
            relations: ['productos']
        });
        this.logger.debug('Carrito encontrado:', carrito);
        if (!carrito) {
            throw new NotFoundException(`Carrito con ID ${idCarrito} no encontrado`);
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