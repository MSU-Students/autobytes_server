import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AttendanceDocument = Attendance & Document;

@Schema()
export class Attendance {
    @Prop({required:true})
    firstName: string;
    @Prop()
    lastName: string;
}
export const AttendanceSchema = SchemaFactory.createForClass(Attendance);