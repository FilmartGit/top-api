import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPageSchema } from './top-page-schema';

@Module({
  controllers: [TopPageController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'TopPage',
        schema: TopPageSchema
      }
    ])
  ]
})
export class TopPageModule { }
