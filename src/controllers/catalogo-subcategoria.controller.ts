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
        type: ProductoCatalogoSubcategoriaResponseDTO,
        isArray: true
    })
    @ApiResponse({
        status: 404,
        description: 'Subcategoría no encontrada.',
    })
    async getClarineteSibProductos(): Promise<ProductoCatalogoSubcategoriaResponseDTO[]> {
        this.logger.debug("Inicio de getClarineteSibProductos");
        const productos = await this.catalogoSubcategoriaService.obtenerProductos();
        if (!productos || productos.length === 0) {
            this.logger.warn("Subcategoría Clarinete Sib no encontrada o sin productos");
            throw new HttpException('Subcategoría no encontrada', HttpStatus.NOT_FOUND);
        }
        this.logger.debug("Productos obtenidos:", productos);
        return productos;
    }
}
