import { Model, Table, Column, PrimaryKey, DataType, ForeignKey, BelongsToMany, IsFloat, HasMany, BelongsTo, HasOne, Max } from 'sequelize-typescript';
import { Cart } from 'src/cart/entities/cart.entity';


@Table
export class User extends Model{


    
    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.INTEGER })
    phone: number

    @HasMany(()=> Cart)
    carts:Cart

}
