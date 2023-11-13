import { Model, Table, Column, PrimaryKey, DataType, HasMany, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Cart } from './cart.entity';
import { Product } from 'src/product/entities/product.entity';

@Table
export class CartProduct extends Model{
  
   

    @Column({ type: DataType.STRING})
    name: string;

    @Column({ type: DataType.INTEGER })
    productId:number ;

   
    @Column({ type: DataType.INTEGER})
    quantity: number 

    @Column({ type: DataType.INTEGER})
    amount: number 

    @Column({ type: DataType.INTEGER})
    userId: number 



    @ForeignKey(() => Cart)
    @Column({ type: DataType.INTEGER})
    cartId: number 

   
   


  
   @BelongsTo(() => Product, "productId")
   product: Product
  

    
}
