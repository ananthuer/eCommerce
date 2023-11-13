import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  ValidationPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiParam, ApiQuery, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@ApiTags('Cart')
@Controller('cart')
@ApiSecurity('x-access-token')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(
    @Request() req,
    @Body(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    createCartDto: CreateCartDto,
  ) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  @ApiQuery({
    name: 'userId',
    required: true,
  })
  findAll(@Request() req, @Query('userId') userId: any) {
    return this.cartService.findAll(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.cartService.remove(+id);
  }

  @Delete(':id/cart-product/:cartProductId')
  @ApiParam({
    name: 'id',
    required: true,
  })
  @ApiParam({
    name: 'cartProductId',
    required: true,
  })
  @ApiQuery({
    name: 'userId',
    required: true,
  })
  deleteCartProduct(
    @Param('id') id: string,
    @Param('cartProductId') cartProductId: number,
    @Query('userId') userId: any,
  ) {
    return this.cartService.deleteCartProduct(+id, cartProductId, userId);
  }

  @Post('cart-product/total-price/:cartId')
  @ApiParam({
    name:"cartId",
    required:true
  })
  cartProductTotal(@Param("cartId") cartId:any){

    return this.cartService.cartProductTotal(cartId);

  }
}
