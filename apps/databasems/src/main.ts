import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as https from 'https';

const httpsOptions = {
  key: fs.readFileSync('/etc/nginx/ssl/nginx.key'),
  cert: fs.readFileSync('/etc/nginx/ssl/nginx.crt'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ httpsOptions });
  app.enableCors(
    { 
      origin: true,
      methods: ['POST', 'PUT', 'DELETE', 'GET']
    }
  );
  
  await app.listen(3001,'0.0.0.0');
}
bootstrap();
