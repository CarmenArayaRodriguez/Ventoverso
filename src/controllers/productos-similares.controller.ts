import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { DestacadoCardResponseDTO } from "src/dto/destacado-card-response.dto";
import { ProductosSimilaresService } from "src/services/productos-similares.service";

@Controller('productos-similares')
export class ProductosSimilaresController {
    constructor(private readonly productosSimilaresService: ProductosSimilaresService) { }

    @Get('/:idSubcategoria')
    @ApiOperation({ summary: 'Obtener productos similares' })
    @ApiResponse({
        status: 200,
        description: 'Productos similares obtenidos correctamente.',
        type: [DestacadoCardResponseDTO]
    })
    @ApiResponse({
        status: 404,
        description: 'Subcategoría no encontrada o no hay productos similares.'
    })
    async obtenerProductosSimilares(@Param('idSubcategoria') idSubcategoria: number): Promise<DestacadoCardResponseDTO[]> {

        return await this.productosSimilaresService.obtenerProductosSimilares(idSubcategoria);
    }
}
