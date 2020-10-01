import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { configure } from './config.main';

async function bootstrap() {
  const baseApp = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ trustProxy: true, logger: { level: 'debug' }})
  );
  const app = configure(baseApp);

  await app.listen(3000);
}
bootstrap();
