import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClearanceDocument = Clearance & Document;

@Schema()
export class Clearance {
    @Prop({required:true})
    firstName: string;
    @Prop()
    lastName: string;
}
export const ClearanceSchema = SchemaFactory.createForClass(Clearance);