import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'




export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @ApiProperty()
    readonly price: number;

    @IsString()
    @ApiProperty()
    readonly offer: number;

    @IsString()
    @ApiProperty()
    readonly images: string;

    @IsString()
    @ApiProperty()
    readonly product_code: string;

    @IsString()
    @ApiProperty()
    readonly description: string;

    @IsString()
    @ApiProperty()
    readonly thumbnail: string;

    @IsString()
    @ApiProperty()
    readonly out_of_stock: boolean;

    @IsString()
    @ApiProperty()
    readonly quantity: number;

    @IsString()
    @ApiProperty()
    readonly HSN: string;

    @IsString()
    @ApiProperty()
    readonly CGST: number;

    @IsString()
    @ApiProperty()
    readonly SGST: number;

    @IsString()
    @ApiProperty()
    readonly alternativeName: string;

    @IsString()
    @ApiProperty()
    readonly IGST: number;

    @IsString()
    @ApiProperty()
    readonly categoryId: number;

    @IsString()
    @ApiProperty()
    readonly subCategoryId: number;

    
    @ApiProperty()
    readonly brandId: number;

    @IsString()
    @ApiProperty()
    readonly productFamilyId: number;
}
