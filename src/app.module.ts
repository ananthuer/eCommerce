import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';

import { CartModule } from './cart/cart.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductModule, CartModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
