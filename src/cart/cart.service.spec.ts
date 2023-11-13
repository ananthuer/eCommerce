import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from 'src/product/product.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartService],
    })
    .overrideProvider(UserService)
    .useClass(UserService)
    .compile();



    service = await module.resolve<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
