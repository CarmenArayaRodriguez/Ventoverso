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
    async obtenerProductosPorSubcategoria(@Param('idCategoria') idCategoria: number): Promise<DestacadoCardResponseDTO[]> {
        const productosRelacionados = await this.productosRelacionadosService.obtenerProductosRelacionados(idCategoria);
        if (!productosRelacionados || productosRelacionados.length === 0) {
            throw new HttpException('No se encontraron productos relacionados', HttpStatus.NOT_FOUND);
        }
        return productosRelacionados;
    }
}
