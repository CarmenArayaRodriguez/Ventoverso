import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatalogoSubcategoriaService } from 'src/services/catalogo-subcategoria.service';
import { ProductoCatalogoSubcategoriaResponseDTO } from 'src/dto/producto-catalogo-subcategoria.dto';


@ApiTags('ClarineteSib')
@Controller('clarinete-sib')
export class CatalogoSubcategoriaController {
    constructor(private readonly catalogoSubcategoriaService: CatalogoSubcategoriaService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener productos de la subcategoría Clarinete Sib' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de productos de la subcategoría Clarinete Sib.',
        type: [ProductoCatalogoSubcategoriaResponseDTO],
    })
    async getClarineteSibProductos(): Promise<ProductoCatalogoSubcategoriaResponseDTO[]> {

        return await this.catalogoSubcategoriaService.obtenerProductos();
    }
}
