import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Open Api Setup
  const config = new DocumentBuilder()
    .setTitle('Nav Ouest APi')
    .setContact(
      'Nav Ouest',
      'https://github.com/modulo-project/navouest-back',
      '',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const port = app.get(ConfigService).get('PORT');

  await app.listen(port, () => {
    Logger.log(`🚀🚀🚀 App is launched on port ${port} 🚀🚀🚀`);
  });
}
bootstrap();
