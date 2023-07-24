import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Product, ProductKey } from '@modules/product/models/product.model';

@Injectable()
export class DeleteProductService {
  constructor(
    @InjectModel('product')
    private readonly model: Model<Product, ProductKey>,
  ) { }

  delete(key: ProductKey) {
    try {
      return this.model.delete(key);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
