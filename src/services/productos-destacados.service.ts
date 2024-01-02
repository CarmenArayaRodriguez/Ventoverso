import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from 'src/entities/producto.entity';
import { ImagenProducto } from 'src/entities/imagen-producto.entity';
import { DestacadoCardResponseDTO } from 'src/dto/destacado-card-response.dto';

@Injectable()
export class ProductosDestacadosService {
    private readonly logger = new Logger(ProductosDestacadosService.name);

    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
        @InjectRepository(ImagenProducto)
        private readonly imagenProductoRepository: Repository<ImagenProducto>,
    ) { }

    async obtenerProductosDestacados(): Promise<DestacadoCardResponseDTO[]> {
        try {
            const productosDestacados = await this.productoRepository.find({
                where: { estrellas: 5 },
                take: 5,
                relations: ['imagenes']
            });

            return productosDestacados.map(producto => ({
                id: producto.id,
                imagenUrl: producto.imagenes.length > 0 ? producto.imagenes[0].imagen : '',
                estrellas: producto.estrellas,
                nombre: producto.nombre,
                precio: producto.precio,
            }));
        } catch (error) {
            this.logger.error("Error al obtener productos destacados:", error);

            throw new InternalServerErrorException('Error al obtener productos destacados');
        }
    }
}
