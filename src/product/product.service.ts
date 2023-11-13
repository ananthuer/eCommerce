import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { CreateRawQueryProductDto } from './dto/create-raw-query.dto';

@Injectable()
export class ProductService {
  async create(createProductDto: CreateRawQueryProductDto) {
    return await Product.create({
      name: createProductDto.name,
      price: createProductDto.price,
      quantity: createProductDto.quantity,
    });
  }

  async findAll() {
    return await Product.findAll();
  }

  async findById(id: number) {
    return await Product.findByPk(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let product = await Product.findByPk(id);

    product.name = updateProductDto.name || product.name;
    product.price = updateProductDto.price || product.price;
    product.quantity = updateProductDto.quantity || product.quantity;

    return await product.save();
  }

  async remove(id: number) {
    return await Product.destroy({ where: { id: id } });
  }
}
