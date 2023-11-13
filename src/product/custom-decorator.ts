import { Inject, Injectable } from '@nestjs/common';
import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
import { ProductService } from './product.service';
  
  @ValidatorConstraint({ name: 'IsProductAlreadyExist', async: true })
  @Injectable()
  export class IsProductAlreadyExistsConstraint implements ValidatorConstraintInterface {

    constructor(
        protected readonly productServices:  ProductService
      ) {}

    validate(id: number) {
       
      return this.productServices.findById(id).then((product) => {
        if (product) return true;
        return false;
      })

    }
  }
  
  export function IsProductAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsProductAlreadyExistsConstraint,
      });
    };
  }