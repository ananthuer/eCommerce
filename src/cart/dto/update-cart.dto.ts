import { PartialType } from '@nestjs/swagger';
import { CreateCartDto } from './create-cart.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'



export class UpdateCartDto extends PartialType(CreateCartDto) {

     
    @IsString()
    @ApiProperty()
    readonly itemTotal: number;



}
