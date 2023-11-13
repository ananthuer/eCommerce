import { Inject, Injectable } from '@nestjs/common';
import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
import sequelize from 'sequelize';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
  
  @ValidatorConstraint({ name: 'IsProductCodeAlreadyExist', async: true })
  @Injectable()
  export class IsProductCodeExistsConstraint implements ValidatorConstraintInterface {

    constructor(
        protected readonly productServices:  ProductService
      ) {}

  async  validate(product_code: string) {
       
      return await Product.findOne({
        where:{
            product_code:{
                [sequelize.Op.eq]:product_code
            }
        }
      }).then((product_codes) => {

        console.log(product_codes)
        if (product_codes) return false;
        return true;
      })

    }
  }
  
  export function IsProductCodeAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsProductCodeExistsConstraint,
      });
    };
  }