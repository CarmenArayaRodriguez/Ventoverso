import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductosRelacionadosService } from '../services/productos-relacionados.service';
import { DestacadoCardResponseDTO } from '../dto/destacado-card-response.dto';

@Controller('productos-relacionados')
export class ProductosRelacionadosController {
    constructor(private readonly productosRelacionadosService: ProductosRelacionadosService) { }

    @Get(':idCategoria')
    @ApiOperation({ summary: 'Obtener productos relacionados por categoría' })
    @ApiResponse({
        status: 200,
        description: 'Productos relacionados obtenidos con éxito',
        type: [DestacadoCardResponseDTO]
    })
    @ApiResponse({
        status: 404,
        description: 'No se encontraron productos relacionados'
    })
    @ApiResponse({
        status: 500,
        description: 'Error interno del servidor'
    })

    async obtenerProductosPorSubcategoria(@Param('idCategoria') idCategoria: number): Promise<DestacadoCardResponseDTO[]> {
        try {
            return await this.productosRelacionadosService.obtenerProductosRelacionados(idCategoria);
        } catch (error) {
            if (error.status === HttpStatus.NOT_FOUND) {
                throw new HttpException('No se encontraron productos relacionados', HttpStatus.NOT_FOUND);
            }
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
