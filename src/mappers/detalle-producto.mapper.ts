import { DetalleProductoDto } from "src/dto/detalle-producto.dto";
import { DetalleProducto } from "src/entities/detalle-producto.entity";

export class DetalleProductoMapper {
    static toDto(detalleProducto: DetalleProducto): DetalleProductoDto {
        const dto = new DetalleProductoDto();
        dto.clave = detalleProducto.clave;
        dto.sistema = detalleProducto.sistema;
        dto.cantLlaves = detalleProducto.cantLlaves;
        dto.materialLlave = detalleProducto.materialLlave;
        dto.materialCuerpo = detalleProducto.materialCuerpo;
        dto.incluyeBoquilla = detalleProducto.incluyeBoquilla;
        dto.cantBarriles = detalleProducto.cantBarriles;
        dto.largoBarril = detalleProducto.largoBarril;
        dto.reposaPulgar = detalleProducto.reposaPulgar;
        dto.cantAnillos = detalleProducto.cantAnillos;
        dto.incluyeCanas = detalleProducto.incluyeCanas;
        dto.incluyeMaleta = detalleProducto.incluyeMaleta;
        dto.origen = detalleProducto.origen;

        return dto;
    }
}
