import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatalogoDeProductosService } from './catalogo-de-productos.service';
import { AgregarDestacadoDTO } from './producto-destacado/dto/agregar-destacado.dto';
import { DestacadoCard } from './producto-destacado/entities/destacado-card.entity';
import { DestacadoCardResponseDTO } from './producto-destacado/dto/destacado-card-response.dto';
import { CarruselItem } from './carrusel/entities/carrusel-item.entity';
import { CarruselItemResponseDTO } from './carrusel/dto/carrusel-item-response.dto';
import { ProductoCatalogoSubcategoriaResponseDTO } from './producto-nuevo/dto/producto-catalogo-subcategoria.dto';
import { ProductoNuevo } from './producto-nuevo/entities/producto-nuevo.entity';
import { transformaACatalogoSubcategoriaResponseDto } from './producto-nuevo/utils/campos-catalogo-subcategoria.utils';
import { ProductoDetalleResponseDTO } from './producto-nuevo/dto/producto-detalle.dto';
import { transformaAProductoDetalleResponseDto } from './producto-nuevo/utils/campos-detalle-producto.utils';


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
    getDestacadoCards(): DestacadoCard[] {
        const mockDataDestacados: DestacadoCard[] = [
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

        return mockDataDestacados;
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
    private clarineteSibMockData: ProductoNuevo[] = [
        {
            id: 'clarinete-sib-1',
            nombre: 'Clarinete Sib Modelo 1',
            marca: 'Marca A',
            modelo: 'Modelo 1',
            estrellas: 3,
            imagenes: [
                'https://ejemplo.com/imagen-1-1.jpg',
                'https://ejemplo.com/imagen-1-2.jpg',
                'https://ejemplo.com/imagen-1-3.jpg',
                'https://ejemplo.com/imagen-1-4.jpg',
                'https://ejemplo.com/imagen-1-5.jpg',
                'https://ejemplo.com/imagen-1-6.jpg',
            ],
            precio: 1000,
            caracteristicasPrincipales: 'Característica principal del Modelo 1',
            descripcion: 'Descripción detallada del Clarinete Sib Modelo 1.',
            categoria: 'clarinetes',
            subcategoria: 'clarinete sib'
        },
        {
            id: 'clarinete-sib-2',
            nombre: 'Clarinete Sib Modelo 2',
            marca: 'Marca A',
            modelo: 'Modelo 2',
            estrellas: 4.7,
            imagenes: [
                'https://ejemplo.com/imagen-2-1.jpg',
                'https://ejemplo.com/imagen-2-2.jpg',
                'https://ejemplo.com/imagen-2-3.jpg',
                'https://ejemplo.com/imagen-2-4.jpg',
                'https://ejemplo.com/imagen-2-5.jpg',
                'https://ejemplo.com/imagen-2-6.jpg',
            ],
            precio: 1100,
            caracteristicasPrincipales: 'Característica principal del Modelo 2',
            descripcion: 'Descripción detallada del Clarinete Sib Modelo 2.',
            categoria: 'clarinetes',
            subcategoria: 'clarinete sib'
        },
        {
            id: 'clarinete-sib-3',
            nombre: 'Clarinete Sib Modelo 3',
            marca: 'Marca A',
            modelo: 'Modelo 3',
            estrellas: 3.8,
            imagenes: [
                'https://ejemplo.com/imagen-3-1.jpg',
                'https://ejemplo.com/imagen-3-2.jpg',
                'https://ejemplo.com/imagen-3-3.jpg',
                'https://ejemplo.com/imagen-3-4.jpg',
                'https://ejemplo.com/imagen-3-5.jpg',
                'https://ejemplo.com/imagen-3-6.jpg',
            ],
            precio: 16000,
            caracteristicasPrincipales: 'Característica principal del Modelo 3',
            descripcion: 'Descripción detallada del Clarinete Sib Modelo 3',
            categoria: 'clarinetes',
            subcategoria: 'clarinete sib'
        },
        {
            id: 'clarinete-sib-4',
            nombre: 'Clarinete Sib Modelo 4',
            marca: 'Marca A',
            modelo: 'Modelo 4',
            estrellas: 4,
            imagenes: [
                'https://ejemplo.com/imagen-4-1.jpg',
                'https://ejemplo.com/imagen-4-2.jpg',
                'https://ejemplo.com/imagen-4-3.jpg',
                'https://ejemplo.com/imagen-4-4.jpg',
                'https://ejemplo.com/imagen-4-5.jpg',
                'https://ejemplo.com/imagen-4-6.jpg',

            ],
            precio: 16000,
            caracteristicasPrincipales: 'Característica principal del Modelo 3',
            descripcion: 'Descripción detallada del Clarinete Sib Modelo 3',
            categoria: 'clarinetes',
            subcategoria: 'clarinete sib'
        },
        {
            id: 'clarinete-sib-16',
            nombre: 'Clarinete Sib Modelo 16',
            marca: 'Marca D',
            modelo: 'Modelo 16',
            estrellas: 4.5,
            imagenes: [
                'https://ejemplo.com/imagen-16-1.jpg',
                'https://ejemplo.com/imagen-16-2.jpg',
                'https://ejemplo.com/imagen-16-3.jpg',
                'https://ejemplo.com/imagen-16-4.jpg',
                'https://ejemplo.com/imagen-16-5.jpg',
                'https://ejemplo.com/imagen-16-6.jpg',

            ],

            precio: 1600,
            caracteristicasPrincipales: 'Característica principal del Modelo 16',
            descripcion: 'Descripción detallada del Clarinete Sib Modelo 16.',
            categoria: 'clarinetes',
            subcategoria: 'clarinete sib'
        }
    ];

    @Get('clarinete-sib')
    @ApiOperation({ summary: 'Obtener productos de la subcategoría Clarinete Sib' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de productos de la subcategoría Clarinete Sib.',
        type: [ProductoCatalogoSubcategoriaResponseDTO],

    })

    getClarineteSibProductos(): ProductoCatalogoSubcategoriaResponseDTO[] {
        return this.clarineteSibMockData.map(transformaACatalogoSubcategoriaResponseDto);
    }

    private detalleClarineteSibMockData: ProductoNuevo = {
        id: 'clarinete-sib-1',
        nombre: 'Clarinete Sib Modelo 1',
        marca: 'Marca A',
        modelo: 'Modelo 1',
        estrellas: 3,
        imagenes: [
            'https://ejemplo.com/imagen-1-1.jpg',
            'https://ejemplo.com/imagen-1-2.jpg',
            'https://ejemplo.com/imagen-1-3.jpg',
            'https://ejemplo.com/imagen-1-4.jpg',
            'https://ejemplo.com/imagen-1-5.jpg',
            'https://ejemplo.com/imagen-1-6.jpg',
        ],
        precio: 1000,
        caracteristicasPrincipales: 'Característica principal del Modelo 1',
        descripcion: 'Descripción detallada del Clarinete Sib Modelo 1.',
        categoria: 'clarinetes',
        subcategoria: 'clarinete sib'
    };

    @Get('detalle-clarinete-sib')
    @ApiOperation({ summary: 'Obtener detalle de un producto de la subcategoría Clarinete Sib' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve el detalle de un producto de la subcategoría Clarinete Sib.',
        type: ProductoDetalleResponseDTO,

    })

    getDetalleClarineteSib(): ProductoDetalleResponseDTO {
        return transformaAProductoDetalleResponseDto(this.detalleClarineteSibMockData);
    }
}


