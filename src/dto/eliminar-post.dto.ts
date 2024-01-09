import { ApiProperty } from "@nestjs/swagger";

export class EliminarPostDTO {
    @ApiProperty({ description: 'ID del post que será eliminado', example: 3 })
    id: number;
}
