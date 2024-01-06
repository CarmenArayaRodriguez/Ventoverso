import { Controller, Get, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { CategoriaService } from 'src/services/categoria.service';
import { Categoria } from 'src/entities/categoria.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/roles.guard';
import { JWTGuard } from 'src/jwt.guard';
import { Roles } from 'src/roles.decorador';

@ApiTags('categorias')
@Controller('categorias')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('ADMINISTRADOR')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Obtener todas las categorías' })
    @ApiResponse({ status: 200, description: 'Retorna todas las categorías.' })
    async obtenerTodasLasCategorias(): Promise<Categoria[]> {
        try {
            const categorias = await this.categoriaService.obtenerTodasLasCategorias();
            if (!categorias || categorias.length === 0) {
                throw new HttpException('No se encontraron categorías', HttpStatus.NOT_FOUND);
            }
            return categorias;
        } catch (error) {
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
