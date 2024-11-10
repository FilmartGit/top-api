import { Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export class Hh {
    @Prop()
    count: number;

    @Prop()
    juniorSalary: number;

    @Prop()
    middleSalary: number;

    @Prop()
    seniorSalary: number;
}

export class Advantages {
    @Prop()
    title: string;

    @Prop()
    description: string;
}

export class TopPage {

    @Prop({ unique: true })
    _id: string;

    @Prop({ enum: TopLevelCategory })
    firstCategory: TopLevelCategory;

    @Prop()
    secondCategory: string;

    @Prop({ unique: true })
    alias: string;

    @Prop()
    title: string;

    @Prop()
    category: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hh' })
    hh?: Hh

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Advantages' }] })
    advantages: Advantages[]

    @Prop()
    seoText: string;

    @Prop()
    tagstitle?: string;

    @Prop([String])
    tags: string[];

};

export const TopPageSchema = SchemaFactory.createForClass(TopPage);