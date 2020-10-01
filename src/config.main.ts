import { NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyHelmet from 'fastify-helmet';
import fastifySecureSession from 'fastify-secure-session';
import fastifyFlash from 'fastify-flash';

export function configure(app: NestFastifyApplication): NestFastifyApplication {
  app.enableCors();
  app.register(fastifyHelmet);
  app.register(fastifySecureSession, { key: 'a-really-long-string-with-at-least-32-byte-length' });
  app.register(fastifyFlash);

  return app;
}
