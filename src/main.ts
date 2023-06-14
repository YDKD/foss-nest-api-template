import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_TITLE, API_VERSION } from './constants';
import { TransformInterceptor } from './core/interceptor';
import { LoggerMiddleware } from './core/middleware';
import { AnyExceptionFilter, HttpExceptionFilter } from './core/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // allow cors
  app.enableCors();

  // swagger docs
  const config = new DocumentBuilder()
    .setTitle(API_TITLE)
    .addBearerAuth()
    .setVersion(API_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // parsing application/json
  app.use(express.json());
  // parsing application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  // add Logger Middleware
  app.use(new LoggerMiddleware().use);
  // add global interceptor for return structure
  app.useGlobalInterceptors(new TransformInterceptor());

  // exception filter
  app.useGlobalFilters(new AnyExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(6060);
}
bootstrap();
