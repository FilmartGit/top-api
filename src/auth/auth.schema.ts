import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
export class Auth {
    _id: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    passwordHash: string;

    createdAt?: Date;

    updatedAt?: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);