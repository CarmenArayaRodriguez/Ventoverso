import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatalogoDeProductosService } from './catalogo-de-productos.service';
import { AgregarDestacadoDTO } from './producto-destacado/dto/agregar-destacado.dto';
import { Destacado } from './producto-destacado/entities/destacado.entity';
import { DestacadoCard } from './producto-destacado/entities/destacado-card.entity';
import { DestacadoCardDTO } from './producto-destacado/dto/destacado-card.dto';


@ApiTags('Catalogo de productos')
@Controller('catalogo-de-productos')
export class CatalogoDeProductosController {

    constructor(private readonly catalogoDeProductosService: CatalogoDeProductosService) { }
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })

    getCatalogoDeProduductos(): string {
        return this.catalogoDeProductosService.getCatalogoDeProductos();
    }

    @Get('destacados-home')
    @ApiOperation({ summary: 'Obtener las tarjetas de productos destacados para el home' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de tarjetas de productos destacados para el home.',
        type: [DestacadoCardDTO],
    })
    getDestacadoCards(): DestacadoCard[] {
        const mockData: DestacadoCard[] = [
            {
                id: 'id-1',
                imagenUrl: 'https://ejemplo.com/imagen1.jpg',
                estrellas: 5,
                rating: 4.8,
                nombre: 'Producto genial 1',
                precio: 990,
            },
            {
                id: 'id-2',
                imagenUrl: 'https://ejemplo.com/imagen2.jpg',
                estrellas: 4,
                rating: 4.3,
                nombre: 'Producto genial 2',
                precio: 8700,
            },
            {
                id: 'id-3',
                imagenUrl: 'https://ejemplo.com/imagen3.jpg',
                estrellas: 3,
                rating: 3.8,
                nombre: 'Producto genial 3',
                precio: 79000,
            },
            {
                id: 'id-4',
                imagenUrl: 'https://ejemplo.com/imagen4.jpg',
                estrellas: 5,
                rating: 4.9,
                nombre: 'Producto genial 4',
                precio: 69900,
            },
            {
                id: 'id-5',
                imagenUrl: 'https://ejemplo.com/imagen5.jpg',
                estrellas: 4,
                rating: 4.1,
                nombre: 'Producto genial 5',
                precio: 60000,
            }
        ];

        return mockData;
    }


    @Post('destacado')
    agregarDestacado(@Body() agregarDestacadoDTO: AgregarDestacadoDTO) {
        return this.catalogoDeProductosService.agregarDestacado(agregarDestacadoDTO);
    }

    @Delete('destacado/:id')
    eliminarDestacado(@Param('id') id: string) {
        return this.catalogoDeProductosService.eliminarDestacado(id);

    }

}

