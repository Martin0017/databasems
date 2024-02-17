import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as https from 'https';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors(
    { 
      origin: true,
      methods: ['POST', 'PUT', 'DELETE', 'GET']
    }
  );

  const config = new DocumentBuilder()
    .setTitle('Powerfit Manager API')
    .setDescription('Alpha-API')
    .setVersion('0.3')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api_manager', app, document);
  
  await app.listen(3001,'0.0.0.0');
}
bootstrap();
