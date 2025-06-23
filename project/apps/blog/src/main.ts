/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const globalPrefix = 'api';
const DEFAULT_PORT = 4000;
const port = process.env.PORT || DEFAULT_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  
  
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

//docker compose --file ./apps/blog/docker-compose.dev.yml --env-file ./apps/blog/blog.env --project-name "readme-blog" up -d