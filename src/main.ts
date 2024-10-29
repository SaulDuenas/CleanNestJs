import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
   );

  const options = new DocumentBuilder()
  .setTitle('CleanNestJs')
  .setDescription('1.0')
  .build();

  const document = SwaggerModule.createDocument(app,options);

  SwaggerModule.setup('api/docs',app,document);

  await app.listen(envs.port);
  console.log(`App runing on port ${ envs.port}`);
}
bootstrap();
