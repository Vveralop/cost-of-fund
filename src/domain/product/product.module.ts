import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { ProductSchema } from './models/product.schema';
import { CreateProductService, DeleteProductService, SelectProductService, UpdateProductService } from './services';
import { CreateProductController, SelectProductController, UpdateProductController, DeleteProductController } from 'src/adapter/controllers/product';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'product',
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [CreateProductController, SelectProductController, UpdateProductController, DeleteProductController],
  providers: [CreateProductService, SelectProductService, UpdateProductService, DeleteProductService],
})
export class ProductModule { }
