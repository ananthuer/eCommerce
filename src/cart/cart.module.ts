import { forwardRef, Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { ProductModule } from 'src/product/product.module';
import { DatabaseModule } from 'src/database.module';

import { RazorpayModule, rzpToken } from 'nestjs-razorpay';

import { IsCartExistsConstraint } from './cartdecorator';



@Module({
  imports:[ ProductModule,  DatabaseModule],
  controllers: [CartController],
  providers: [CartService, IsCartExistsConstraint],
  exports:[CartService]
})
export class CartModule {}
