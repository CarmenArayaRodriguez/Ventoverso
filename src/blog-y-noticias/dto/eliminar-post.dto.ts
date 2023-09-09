import { ApiProperty } from "@nestjs/swagger";

export class EliminarPostDTO {
    @ApiProperty({ description: 'ID del post que será eliminado' })
    id: string;
}
