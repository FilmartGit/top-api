import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.shema';

@Module({
  controllers: [ProductController],
  imports: [
    MongooseModule.forFeature([{
      name: 'product',
      schema: ProductSchema
    }])
  ]
})
export class ProductModule { }
