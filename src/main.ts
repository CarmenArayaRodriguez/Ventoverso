import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const nombreProyecto = process.env.npm_package_name;
  const versionProyecto = process.env.npm_package_version;

  let documentBuilder = new DocumentBuilder()
    .setTitle(nombreProyecto)
    .setDescription('Tienda virtual de venta de instrumentos musicales de viento')
    .setVersion(versionProyecto)
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();

