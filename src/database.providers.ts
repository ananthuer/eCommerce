import { Sequelize } from 'sequelize-typescript';

import { Cart } from './cart/entities/cart.entity';

import { Product } from './product/entities/product.entity';


import { rzpToken } from 'nestjs-razorpay';
import { CartProduct } from './cart/entities/cart_product.entity';
import { User } from './user/entities/user.entity';






export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1316',
        database: 'eCommerce',
      
        
      });
      sequelize.addModels([ Product,   Cart, CartProduct,User ]);
      await sequelize.sync();
      return sequelize;
    },
  },
]; 