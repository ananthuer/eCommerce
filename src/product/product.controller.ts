import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  ParseBoolPipe,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  UseInterceptors,
  UseGuards,
  Request,
  Put,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiBody,
  ApiConsumes,
  ApiParam,
  ApiPropertyOptional,
  ApiQuery,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { ProductQueryDto } from './dto/product-query.dto';
import { CreateRawQueryProductDto } from './dto/create-raw-query.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiSecurity('x-access-token')
  create(
    @Body(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    createProductDto: CreateRawQueryProductDto,
    @Request() req,
  ) {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  @Put(':id')
  @ApiSecurity('x-access-token')
  @ApiParam({
    name: 'id',
    required: true,
  })
  update(
    @Param(new ValidationPipe({})) params: ProductQueryDto,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(params.id, updateProductDto);
  }

  @Delete(':id')
  @ApiSecurity('x-access-token')
  @ApiParam({
    name: 'id',
    required: true,
  })
  remove(@Param(new ValidationPipe({})) params: ProductQueryDto) {
    return this.productService.remove(params.id);
  }
}
