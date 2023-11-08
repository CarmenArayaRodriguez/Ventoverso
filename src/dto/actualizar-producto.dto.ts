import { PartialType } from '@nestjs/swagger';
import { CrearProductoDTO } from './crear-producto.dto';

export class ActualizarProductoDTO extends PartialType(CrearProductoDTO) { }
