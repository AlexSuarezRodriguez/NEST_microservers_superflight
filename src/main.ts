import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
  .setTitle('SuperFlight API')
  .setDescription('scheduled flight App')
  .setVersion('2.0.0')
  // .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, options);

SwaggerModule.setup('/api/docs', app, document,{
  swaggerOptions:{
    filter:true,
  }
});

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
