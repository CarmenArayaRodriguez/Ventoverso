import { Module } from '@nestjs/common';
import { PerfilDeUsuarioController } from '../controllers/perfil-de-usuario.controller';
import { PerfilDeUsuarioService } from '../services/perfil-de-usuario.service';

@Module({
  controllers: [PerfilDeUsuarioController],
  providers: [PerfilDeUsuarioService]
})
export class PerfilDeUsuarioModule { }
