import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatalogoDeProductosService } from './catalogo-de-productos.service';
import { AgregarDestacadoDTO } from './producto-destacado/dto/agregar-destacado.dto';
import { DestacadoCard } from './producto-destacado/entities/destacado-card.entity';
import { DestacadoCardResponseDTO } from './producto-destacado/dto/destacado-card-response.dto';
import { CarruselItem } from './carrusel/entities/carrusel-item.entity';
import { CarruselItemResponseDTO } from './carrusel/dto/carrusel-item-response.dto';
import { CategoriaClarinete } from './clarinetes/entities/categoria-clarinete.entity';
import { CategoriaClarineteResponseDTO } from './clarinetes/dto/categoria-clarinete-response.dto';
import { convierteADestacadoCardResponseDTO } from './producto-destacado/utils/destacado-card.utils';


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
        type: [DestacadoCardResponseDTO],
    })
    getDestacadosHome(): DestacadoCardResponseDTO[] {
        const mockDataDestacadosHome: DestacadoCardResponseDTO[] = [
            {
                imagenUrl: 'https://ejemplo.com/imagen1.jpg',
                estrellas: 5,
                rating: 4.8,
                nombre: 'Producto genial 1',
                precio: 990,
            },
            {
                imagenUrl: 'https://ejemplo.com/imagen2.jpg',
                estrellas: 4,
                rating: 4.3,
                nombre: 'Producto genial 2',
                precio: 8700,
            },
            {
                imagenUrl: 'https://ejemplo.com/imagen3.jpg',
                estrellas: 3,
                rating: 3.8,
                nombre: 'Producto genial 3',
                precio: 79000,
            },
            {
                imagenUrl: 'https://ejemplo.com/imagen4.jpg',
                estrellas: 5,
                rating: 4.9,
                nombre: 'Producto genial 4',
                precio: 69900,
            },
            {
                imagenUrl: 'https://ejemplo.com/imagen5.jpg',
                estrellas: 4,
                rating: 4.1,
                nombre: 'Producto genial 5',
                precio: 60000,
            }
        ];

        return mockDataDestacadosHome.map(convierteADestacadoCardResponseDTO);
    }


    @Post('destacado')
    agregarDestacado(@Body() agregarDestacadoDTO: AgregarDestacadoDTO) {
        return this.catalogoDeProductosService.agregarDestacado(agregarDestacadoDTO);
    }

    @Delete('destacado/:id')
    eliminarDestacado(@Param('id') id: string) {
        return this.catalogoDeProductosService.eliminarDestacado(id);

    }

    @Get('carrusel')
    @ApiOperation({ summary: 'Obtener los items del carrusel para el home' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de items del carrusel para el home.',
        type: [CarruselItemResponseDTO],
    })
    obtenerItemsCarrusel(): CarruselItemResponseDTO[] {
        const mockDataCarrusel: CarruselItemResponseDTO[] = [
            {
                id: 'carousel-id-1',
                titulo: 'Nueva Promoción de Verano',
                descripcion: 'Disfruta de nuestros descuentos de verano en toda la tienda.',
                imagenUrl: 'https://ejemplo.com/imagen-carousel1.jpg',
                linkDetalle: 'https://ejemplo.com/promocion-verano'
            },
            {
                id: 'carousel-id-2',
                titulo: 'Lanzamiento Exclusivo: Producto X',
                descripcion: 'Conoce el nuevo producto X, exclusivo en nuestra tienda.',
                imagenUrl: 'https://ejemplo.com/imagen-carousel2.jpg',
                linkDetalle: 'https://ejemplo.com/producto-x'
            },
            {
                id: 'carousel-id-3',
                titulo: '¡Participa en nuestro Gran Concurso de Invierno!',
                descripcion: 'Compra cualquier producto y entra en el sorteo de un fabuloso premio. No te pierdas esta oportunidad.',
                imagenUrl: 'https://ejemplo.com/imagen-carousel-concurso.jpg',
                linkDetalle: 'https://ejemplo.com/concurso-invierno'
            }
        ];

        return mockDataCarrusel.map(item => ({
            id: item.id,
            titulo: item.titulo,
            descripcion: item.descripcion,
            imagenUrl: item.imagenUrl,
            linkDetalle: item.linkDetalle
        }));
    }

    @Get('categoria-clarinete')
    @ApiOperation({ summary: 'Obtener los datos de la categoría clarinete para el catálogo' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de datos de la categoría clarinete.',
        type: [CategoriaClarineteResponseDTO],
    })
    obtenerCategoriaClarinete(): CategoriaClarinete[] {
        const mockDataCategoriaClarinete: CategoriaClarinete[] = [
            {
                id: 'id-clarinete-1',
                nombre: 'Clarinete Sib',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-sib.jpg',
            },
            {
                id: 'id-clarinete-2',
                nombre: 'Clarinete La',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-la.jpg',
            },
            {
                id: 'id-clarinete-3',
                nombre: 'Clarinete Mib',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-mib.jpg',
            },
            {
                id: 'id-clarinete-4',
                nombre: 'Campanas y barriles',
                imagenUrl: 'https://ejemplo.com/imagen-campanas-barriles.jpg',
            },
            {
                id: 'id-clarinete-5',
                nombre: 'Cañas clarinete',
                imagenUrl: 'https://ejemplo.com/imagen-canas-clarinete.jpg',
            },
            {
                id: 'id-clarinete-6',
                nombre: 'Accesorios clarinete',
                imagenUrl: 'https://ejemplo.com/imagen-accesorios-clarinete.jpg',
            },
            {
                id: 'id-clarinete-7',
                nombre: 'Ver todo Clarinetes',
                imagenUrl: 'https://ejemplo.com/imagen-ver-todo-clarinetes.jpg',
            }

        ];

        return mockDataCategoriaClarinete;
    }

    @Get('destacados-clarinete')
    @ApiOperation({ summary: 'Obtener las tarjetas de productos destacados de clarinetes' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de tarjetas de productos destacados de clarinetes.',
        type: [DestacadoCardResponseDTO],
    })
    getDestacadosClarinete(): DestacadoCardResponseDTO[] {
        const mockDataDestacadosClarinete: DestacadoCardResponseDTO[] = [
            {
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-buffet.jpg',
                estrellas: 5,
                rating: 4.8,
                nombre: 'Clarinete Buffet Crampon R13',
                precio: 250000,
            },
            {
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-yamaha.jpg',
                estrellas: 4,
                rating: 4.5,
                nombre: 'Clarinete Yamaha YCL-650',
                precio: 200000,
            },
            {
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-selmer.jpg',
                estrellas: 4,
                rating: 4.3,
                nombre: 'Clarinete Selmer Paris',
                precio: 240000,
            },
            {
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-backun.jpg',
                estrellas: 5,
                rating: 4.9,
                nombre: 'Clarinete Backun Alpha',
                precio: 210000,
            },
            {
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-leblanc.jpg',
                estrellas: 4,
                rating: 4.4,
                nombre: 'Clarinete Leblanc Serenade',
                precio: 220000,
            }
        ];
        return mockDataDestacadosClarinete.map(convierteADestacadoCardResponseDTO);
    }
}


