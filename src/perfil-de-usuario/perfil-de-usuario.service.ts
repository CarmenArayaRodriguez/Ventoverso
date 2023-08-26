import { Injectable } from '@nestjs/common';

@Injectable()
export class PerfilDeUsuarioService {
    getPerfilDeUsuario(): string {
        return 'Perfil de usuario';
    }
}
