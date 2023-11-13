import { Injectable } from '@nestjs/common';

import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
import * as crypto from 'crypto';
import { CartProduct } from 'src/cart/entities/cart_product.entity';
import { Product } from 'src/product/entities/product.entity';

import { Sequelize } from 'sequelize-typescript';
import sequelize from 'sequelize';
import { userInfo } from 'os';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CartService {
  async create(createCartDto: CreateCartDto) {

    let user = await User.findByPk(createCartDto.userId)

    
    if(!user)return "no user found"

    let cart = await Cart.findOne({
      where:{
        userId:createCartDto.userId
      }
    })

    let product: Product = await Product.findOne({
      where: { id: createCartDto.productId },
    });

    if(cart){

      if(product.quantity === 0) return "out of stock"

      if(product.quantity<createCartDto.quantity)return "out of stock"

      let curQnty = product.quantity

      let updateQnty = curQnty - createCartDto.quantity

      if(updateQnty>=0){
      let prod = await Product.update({
          quantity:updateQnty
        },{
          where:{
            id:product.id
          }
        })

      
      }else {
        return "out of stock"
      }

      let cartItem = cart.itemTotal

      let netTotal = cartItem+product.price

      await Cart.update({
        itemTotal: product.price,
        netTotal: netTotal,
        
      },{
        where:{
          id:cart.id
        }
      })

      let cartProduct = await CartProduct.create({
        productId: product.id,
        name: product.name,

        quantity: createCartDto.quantity,

        amount: product.price,

        cartId: cart.id,

        userId:createCartDto.userId
      });

  
     
      return { cart, message: 'item added to cart' };
    }else{

      
      if(product.quantity === 0) return "out of"

      let curQnty = product.quantity

      let updateQnty = curQnty - createCartDto.quantity

      if(updateQnty>=0){
      let prod = await Product.update({
          quantity:updateQnty
        },{
          where:{
            id:product.id
          }
        })

      
      }else {
        return "out of stock"
      }
      {
        const cart = await Cart.create({
          itemTotal: 0,
          netTotal: 0,
          userId:createCartDto.userId
        });
  
        let cartProduct = await CartProduct.create({
          productId: product.id,
          name: product.name,
  
          quantity: createCartDto.quantity,
  
          amount: product.price,
  
          cartId: cart.id,
  
          userId:createCartDto.userId
        });
  
        //updateCart
  
        return { cart, message: 'item added to cart' };
      }
    }

   
  }

  async findAll(userId:any) {

    let user = await User.findByPk(userId)

    if(!user)return "no user found"
   return await Cart.findOne({
      include: [
        {
          model: CartProduct,
          attributes: ['id', 'productId', 'amount', 'quantity', 'name'],
        },
      ],
      where:{
        userId:userId
      }
    });
  }

  async findById(id: number) {
    return await Cart.findByPk(id);
  }

 

  async update(id: number, updateCartDto: UpdateCartDto) {
    return await Cart.update(
      {
        itemTotal: updateCartDto.itemTotal,
      },
      { where: { id: id } },
    );
  }

  async remove(id: number) {
    return await Cart.destroy({ where: { id: id } });
  }

  async deleteCartProduct(id: number,  cartProductId: number,userId:any) {

    let user = await User.findByPk(userId)
    
    if(!user)return "no user found"

    let cart_product = await CartProduct.findByPk(cartProductId)

    if(!cart_product)return "no product found"
    
    return await CartProduct.destroy({
      where: {
        id: cartProductId,
        userId:userId
      },
    });
  }

  async cartProductTotal(cartId:any){


    let cartProducts = await CartProduct.findAll({
      where:{
        cartId:cartId
      }
    })

    let totalPrice = cartProducts.map((e) => e.amount)

    var total = totalPrice.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
  }, 0);

  return total

  }
}
