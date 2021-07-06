import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required:true})
    firstName: string;
    @Prop()
    lastName: string;
}
export const UserSchema = SchemaFactory.createForClass(User);