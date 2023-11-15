import { Controller, Get, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ProductosDestacadosService } from "src/services/productos-destacados.service";
import { DestacadoCardResponseDTO } from "src/dto/destacado-card-response.dto";

@Controller()
export class ProductosDestacadosController {
    constructor(private productosDestacadosService: ProductosDestacadosService) { }

    @Get('/destacados')
    @ApiOperation({ summary: 'Obtener productos destacados' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Productos destacados obtenidos correctamente.',
        type: DestacadoCardResponseDTO,
        isArray: true
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Solicitud incorrecta debido a datos inválidos.'
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'No se encontraron productos destacados.'
    })
    async obtenerProductosDestacados(): Promise<DestacadoCardResponseDTO[]> {
        return this.productosDestacadosService.obtenerProductosDestacados();
    }
}
