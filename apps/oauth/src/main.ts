import { NestFactory } from '@nestjs/core';
import { OauthModule } from './oauth.module';

async function bootstrap() {
  const app = await NestFactory.create(OauthModule);
  app.enableCors(
    { 
      origin: ['http://localhost:3000'],
      methods: ['POST', 'PUT', 'DELETE', 'GET']
    }
  );
  await app.listen(3002);
}
bootstrap();
