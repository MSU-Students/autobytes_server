import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecordsDocument = Records & Document;

@Schema()
export class Records {
    @Prop({required:true})
    firstName: string;
    @Prop()
    lastName: string;
}
export const RecordsSchema = SchemaFactory.createForClass(Records);