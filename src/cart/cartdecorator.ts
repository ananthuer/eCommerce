import { Inject, Injectable } from '@nestjs/common';
import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
import { CartService } from './cart.service';

  
  @ValidatorConstraint({ name: 'IsCartProductsExist', async: true })
  @Injectable()
  export class IsCartExistsConstraint implements ValidatorConstraintInterface {

    constructor(
        protected readonly cartServices:  CartService
      ) {}

    validate(id: number) {

    
      
      return this.cartServices.findById(id).then((cart) => {

        if (cart) return true;
        return false;
      })}

    }
  
  
  export function IsCartExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsCartExistsConstraint,
      });
    };
  }