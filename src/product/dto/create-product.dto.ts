import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from  'class-validator'




export class CreateProductDto {
    @IsString()
    @ApiProperty()
    readonly name: string;

   
    @ApiProperty()
    @IsNotEmpty()
    readonly price: number;

    

    @ApiProperty()
    readonly quantity: number;


    
}
