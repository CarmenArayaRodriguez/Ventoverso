import { Module } from '@nestjs/common';
import { PerfilDeUsuarioController } from './perfil-de-usuario.controller';

@Module({
  controllers: [PerfilDeUsuarioController]
})
export class PerfilDeUsuarioModule {}
