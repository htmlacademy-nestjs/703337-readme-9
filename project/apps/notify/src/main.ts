/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 4000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

//docker compose --file ./apps/notify/notify.compose.dev.yml  --project-name "readme-notify" --env-file ./apps/notify/notify.env up -d

//docker compose --file ./apps/file-vault/file-vault.compose.dev.yml --env-file ./apps/file-vault/file-vault.env --project-name "readme-file-vault" up -d

//docker compose --file ./apps/account/docker-compose.dev.yml --project-name "typoteka-account" --env-file ./apps/account/account.env up -d