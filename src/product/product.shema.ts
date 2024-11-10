import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as mongoose from 'mongoose';

export type productDocument = HydratedDocument<Product>;

class ProductHaracterystic {
    @Prop()
    name: string;

    @Prop()
    value: string;
}

@Schema()
export class Product {
    @Prop({ unique: true })
    _id: string;

    @Prop()
    image: string;

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    oldPrice: number;

    @Prop()
    credit: number;

    @Prop()
    calculatedRating: number;

    @Prop()
    description: string;

    @Prop()
    advantages: string;

    @Prop()
    disAdvantages: string;

    @Prop([String])
    categories: string[];

    @Prop([String])
    tags: string[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductHaracterystic' }] })
    characteristics: ProductHaracterystic[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
