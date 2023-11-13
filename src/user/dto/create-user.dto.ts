import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from  'class-validator'


export class CreateUserDto {

    @IsString()
    @ApiProperty()
    readonly name: string;

   
    @ApiProperty()
    @IsNotEmpty()
    readonly phone: number;

}
