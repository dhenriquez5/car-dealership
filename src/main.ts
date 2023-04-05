import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remueve las propiedades no requerias en el requst
      forbidNonWhitelisted: true, // GENERA ERROR EN CASO DE QUE ENVIE PROPIEDADES DE MAS
    }),
  );
  await app.listen(3000);
}
bootstrap();
