import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ProductosDestacadosService } from "src/services/productos-destacados.service";
import { DestacadoCardResponseDTO } from "src/dto/destacado-card-response.dto";

@Controller('productos-destacados')
export class ProductosDestacadosController {
    constructor(private productosDestacadosService: ProductosDestacadosService) { }

    @Get('/')
    @ApiOperation({ summary: 'Obtener productos destacados' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Productos destacados obtenidos correctamente.',
        type: DestacadoCardResponseDTO,
        isArray: true
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'No se encontraron productos destacados.'
    })
    async obtenerProductosDestacados(): Promise<DestacadoCardResponseDTO[]> {
        const destacados = await this.productosDestacadosService.obtenerProductosDestacados();
        if (destacados.length === 0) {
            throw new HttpException('No se encontraron productos destacados', HttpStatus.NOT_FOUND);
        }
        return destacados;
    }
}
