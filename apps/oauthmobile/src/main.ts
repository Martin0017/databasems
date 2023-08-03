import { NestFactory } from '@nestjs/core';
import { OauthmobileModule } from './oauthmobile.module';

async function bootstrap() {
  const app = await NestFactory.create(OauthmobileModule);
  await app.listen(3000);
}
bootstrap();
