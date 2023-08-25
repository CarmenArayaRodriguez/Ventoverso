import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogoDeProductosModule } from './catalogo-de-productos/catalogo-de-productos.module';
import { ServicioAlClienteModule } from './servicio-al-cliente/servicio-al-cliente.module';
import { CarritoDeComprasModule } from './carrito-de-compras/carrito-de-compras.module';
import { PerfilDeUsuarioModule } from './perfil-de-usuario/perfil-de-usuario.module';
import { BlogYNoticiasModule } from './blog-y-noticias/blog-y-noticias.module';
import { ReservasDeCitaModule } from './reservas-de-cita/reservas-de-cita.module';

@Module({
  imports: [CatalogoDeProductosModule, ServicioAlClienteModule, CarritoDeComprasModule, PerfilDeUsuarioModule, BlogYNoticiasModule, ReservasDeCitaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
