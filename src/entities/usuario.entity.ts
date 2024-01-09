import { ApiProperty } from "@nestjs/swagger";

export class Usuario {
    @ApiProperty()
    rut: string;

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    apellido: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
    dv: string;

}


