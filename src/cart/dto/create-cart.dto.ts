import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString} from  'class-validator'



export class CreateCartDto {

    
    
    @ApiProperty()
    @IsNumber()

    readonly productId: number;

    @IsNumber()
    @ApiProperty()
    readonly quantity: number;

    @IsNumber()
    @ApiProperty()
    readonly userId: number;


    
}
