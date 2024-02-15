/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //enable cors
  const port = process.env.PORT || 3000;
  await app.listen(port);
}

bootstrap()
  .then(() => {
    Logger.log(
      `App is running on port: http://localhost:${process.env.PORT}/graphql`
    );
  })
  .catch((err) => {
    console.error(err);
  });
