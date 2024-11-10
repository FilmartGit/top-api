import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type reviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {

    @Prop({ unique: true })
    _id: string;

    @Prop()
    name: string;

    @Prop()
    title: string;

    @Prop()
    phone: string;

    @Prop()
    description: string;

    @Prop()
    rating: string;

    createdAt?: Date;

    updatedAt?: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);