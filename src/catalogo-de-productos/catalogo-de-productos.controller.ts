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
                id: 'id-destacado-home-1',
                imagenUrl: 'https://ejemplo.com/imagen1.jpg',
                estrellas: 5,
                nombre: 'Producto genial 1',
                precio: 990,
                linkDetalle: 'https://ejemplo.com/producto'
            },
            {
                id: 'id-destacado-home-2',
                imagenUrl: 'https://ejemplo.com/imagen2.jpg',
                estrellas: 4,
                nombre: 'Producto genial 2',
                precio: 8700,
                linkDetalle: 'https://ejemplo.com/producto'
            },
            {
                id: 'id-destacado-home-3',
                imagenUrl: 'https://ejemplo.com/imagen3.jpg',
                estrellas: 3,
                nombre: 'Producto genial 3',
                precio: 79000,
                linkDetalle: 'https://ejemplo.com/producto'
            },
            {
                id: 'id-destacado-home-4',
                imagenUrl: 'https://ejemplo.com/imagen4.jpg',
                estrellas: 5,
                nombre: 'Producto genial 4',
                precio: 69900,
                linkDetalle: 'https://ejemplo.com/producto'
            },
            {
                id: 'id-destacado-home-5',
                imagenUrl: 'https://ejemplo.com/imagen5.jpg',
                estrellas: 4,
                nombre: 'Producto genial 5',
                precio: 60000,
                linkDetalle: 'https://ejemplo.com/producto'
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
            linkDetalle: 'https://ejemplo.com/producto',
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
            linkDetalle: 'https://ejemplo.com/producto',
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
            linkDetalle: 'https://ejemplo.com/producto',
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
            linkDetalle: 'https://ejemplo.com/producto',
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
            linkDetalle: 'https://ejemplo.com/producto',
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
                linkDetalle: 'https://ejemplo.com/subcategoria'
            },
            {
                id: 'id-clarinete-2',
                nombre: 'Clarinete La',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-la.jpg',
                linkDetalle: 'https://ejemplo.com/subcategoria'
            },
            {
                id: 'id-clarinete-3',
                nombre: 'Clarinete Mib',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-mib.jpg',
                linkDetalle: 'https://ejemplo.com/subcategoria'
            },
            {
                id: 'id-clarinete-4',
                nombre: 'Campanas y barriles',
                imagenUrl: 'https://ejemplo.com/imagen-campanas-barriles.jpg',
                linkDetalle: 'https://ejemplo.com/subcategoria'
            },
            {
                id: 'id-clarinete-5',
                nombre: 'Cañas clarinete',
                imagenUrl: 'https://ejemplo.com/imagen-canas-clarinete.jpg',
                linkDetalle: 'https://ejemplo.com/subcategoria'
            },
            {
                id: 'id-clarinete-6',
                nombre: 'Accesorios clarinete',
                imagenUrl: 'https://ejemplo.com/imagen-accesorios-clarinete.jpg',
                linkDetalle: 'https://ejemplo.com/subcategoria'
            },
            {
                id: 'id-clarinete-7',
                nombre: 'Ver todo Clarinetes',
                imagenUrl: 'https://ejemplo.com/imagen-ver-todo-clarinetes.jpg',
                linkDetalle: 'https://ejemplo.com/subcategoria'
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
                id: 'id-destacado-clarinete-1',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-buffet.jpg',
                estrellas: 5,
                nombre: 'Clarinete Buffet Crampon R13',
                precio: 250000,
                linkDetalle: 'https://ejemplo.com/producto'
            },
            {
                id: 'id-destacado-clarinete-2',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-yamaha.jpg',
                estrellas: 4,
                nombre: 'Clarinete Yamaha YCL-650',
                precio: 200000,
                linkDetalle: 'https://ejemplo.com/producto'
            },
            {
                id: 'id-destacado-clarinete-3',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-selmer.jpg',
                estrellas: 4,
                nombre: 'Clarinete Selmer Paris',
                precio: 240000,
                linkDetalle: 'https://ejemplo.com/producto'
            },
            {
                id: 'id-destacado-clarinete-4',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-backun.jpg',
                estrellas: 5,
                nombre: 'Clarinete Backun Alpha',
                precio: 210000,
                linkDetalle: 'https://ejemplo.com/producto'
            },
            {
                id: 'id-destacado-clarinete-5',
                imagenUrl: 'https://ejemplo.com/imagen-clarinete-leblanc.jpg',
                estrellas: 4,
                nombre: 'Clarinete Leblanc Serenade',
                precio: 220000,
                linkDetalle: 'https://ejemplo.com/producto'
            }
        ];
        return mockDataDestacadosClarinete.map(convierteADestacadoCardResponseDTO);
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
        linkDetalle: 'https://ejemplo.com/producto',
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





