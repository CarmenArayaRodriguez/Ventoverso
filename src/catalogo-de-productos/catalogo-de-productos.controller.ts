import { Controller, Get,Post,Delete,Param,Body} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatalogoDeProductosService } from './catalogo-de-productos.service';
import { AgregarDestacadoDTO } from './producto-destacado/dto/agregar-destacado.dto';
import { Destacado } from './producto-destacado/entities/destacado.entity';


@ApiTags('Catalogo de productos')
@Controller('catalogo-de-productos')
export class CatalogoDeProductosController {

    constructor(private readonly catalogoDeProductosService: CatalogoDeProductosService) { }
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })

    getCatalogoDeProduductos(): string {
        return this.catalogoDeProductosService.getCatalogoDeProductos();
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
    
