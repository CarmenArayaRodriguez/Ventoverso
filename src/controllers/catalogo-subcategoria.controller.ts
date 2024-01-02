import { Controller, Get, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatalogoSubcategoriaService } from 'src/services/catalogo-subcategoria.service';
import { ProductoCatalogoSubcategoriaResponseDTO } from 'src/dto/producto-catalogo-subcategoria.dto';


@ApiTags('ClarineteSib')
@Controller('clarinete-sib')
export class CatalogoSubcategoriaController {
    private readonly logger = new Logger(CatalogoSubcategoriaController.name);

    constructor(private readonly catalogoSubcategoriaService: CatalogoSubcategoriaService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener productos de la subcategoría Clarinete Sib' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de productos de la subcategoría Clarinete Sib.',
    })
    @ApiResponse({
        status: 404,
        description: 'Subcategoría no encontrada.',
        type: ProductoCatalogoSubcategoriaResponseDTO,
        isArray: true
    })

    async getClarineteSibProductos(): Promise<ProductoCatalogoSubcategoriaResponseDTO[]> {
        this.logger.debug("Inicio de getClarineteSibProductos");
        try {
            const productos = await this.catalogoSubcategoriaService.obtenerProductos();
            this.logger.debug("Productos obtenidos:", productos);
            if (productos.length === 0) {
                throw new HttpException('Subcategoría no encontrada', HttpStatus.NOT_FOUND);
            }
            return productos;
        } catch (error) {
            this.logger.error("Error en getClarineteSibProductos", error);
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
