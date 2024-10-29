import { Module } from '@nestjs/common';
import { ProductsModule } from './resources/products/products.module';
import { ClientModule } from './resources/client/client.module';

@Module({
  imports: [ProductsModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
