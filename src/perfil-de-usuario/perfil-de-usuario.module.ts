import { Module } from '@nestjs/common';
import { PerfilDeUsuarioController } from './perfil-de-usuario.controller';
import { PerfilDeUsuarioService } from './perfil-de-usuario.service';

@Module({
  controllers: [PerfilDeUsuarioController],
  providers: [PerfilDeUsuarioService]
})
export class PerfilDeUsuarioModule {}
