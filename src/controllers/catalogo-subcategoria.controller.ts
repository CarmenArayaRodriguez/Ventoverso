import { Controller, Get, HttpException, HttpStatus, Logger, Query } from '@nestjs/common';
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

    @Get('paginados')
    @ApiOperation({ summary: 'Obtener productos de la subcategoría Clarinete Sib paginados' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de productos paginados de la subcategoría Clarinete Sib.',
        type: ProductoCatalogoSubcategoriaResponseDTO,
        isArray: true
    })
    @ApiResponse({
        status: 404,
        description: 'Productos no encontrados o subcategoría no existente.',
    })
    async getClarineteSibProductosPaginados(
        @Query('pagina') pagina: number,
        @Query('limite') limite: number
    ): Promise<{
        datos: ProductoCatalogoSubcategoriaResponseDTO[];
        paginaActual: number;
        limitePorPagina: number;
        totalPaginas: number;
        totalProductos: number;
    }> {
        this.logger.debug(`Inicio de getClarineteSibProductosPaginados con página: ${pagina}, limite: ${limite}`);
        try {
            const resultadoPaginado = await this.catalogoSubcategoriaService.obtenerProductosPaginados(pagina, limite);
            this.logger.debug("Productos paginados obtenidos:", resultadoPaginado);
            return resultadoPaginado;
        } catch (e) {
            this.logger.error('Error obteniendo productos paginados:', e);
            throw new HttpException('No se pudieron obtener los productos', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

