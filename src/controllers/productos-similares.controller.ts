import { Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { DestacadoCardResponseDTO } from "src/dto/destacado-card-response.dto";
import { ProductosSimilaresService } from "src/services/productos-similares.service";

@Controller('productos-similares')
export class ProductosSimilaresController {
    constructor(private productosSimilaresService: ProductosSimilaresService) { }

    @Get('/:idSubcategoria')
    @ApiOperation({ summary: 'Obtener productos similares' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Productos similares obtenidos correctamente.',
        type: [DestacadoCardResponseDTO]
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'Subcategoría no encontrada o no hay productos similares.',
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Datos proporcionados no son válidos.',
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Error interno del servidor.',
    })
    async obtenerProductosSimilares(@Param('idSubcategoria') idSubcategoria: number): Promise<DestacadoCardResponseDTO[]> {
        return this.productosSimilaresService.obtenerProductosSimilares(idSubcategoria);
    }
}

