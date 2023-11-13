import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString} from  'class-validator'

import { IsProductAlreadyExist } from '../custom-decorator'


export class ProductQueryDto {

   
    @IsProductAlreadyExist({ message: "Product does not exist"})
    id: number



}