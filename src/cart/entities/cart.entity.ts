import { Model, Table, Column, PrimaryKey, DataType, HasMany, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { CartProduct } from './cart_product.entity';
import { User } from 'src/user/entities/user.entity';



@Table
export class Cart extends Model{


 
  
    @Column({ type: DataType.INTEGER})
    itemTotal: number;

    @ForeignKey(()=>User)
      @Column({ type: DataType.INTEGER})
    userId: number;

    
    @Column({ type: DataType.INTEGER})
    netTotal: number 

  
    @HasMany(() => CartProduct)
    cartProducts: CartProduct[]

    @BelongsTo(() => User)
    users:User
  
}
