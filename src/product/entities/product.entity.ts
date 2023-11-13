
import { Model, Table, Column, PrimaryKey, DataType, ForeignKey, BelongsToMany, IsFloat, HasMany, BelongsTo, HasOne, Max } from 'sequelize-typescript';






@Table
export class Product extends Model {



    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.FLOAT })
    price: number

   

    @Column({ type: DataType.INTEGER})
    quantity:number

 



    inventory(): string {
      if(this.quantity > 5){
        return "in_stock"
      }if(this.quantity < 5 && this.quantity > 0){
        return "limited"
      }if(this.quantity == 0){
        return "out_of_stock"
      }
    }
   
    selling_price() :  number{
      if(this.getDataValue('offer')){
        return (this.getDataValue('price')*(1- this.getDataValue('offer')))
      }else {
       return (this.getDataValue('price') / 1.0)

      }
      
    }


    mrp_price(): number{
      
      return this.price;
     
    }

  

}
