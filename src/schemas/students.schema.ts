import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IStudents } from 'src/interfaces/students.interface';

export type StudentsDocument = Students & Document;

@Schema()
export class Students implements IStudents {

    @ApiProperty()
    @Prop({ required: true })
    studentName: string;

    @ApiProperty()
    @Prop({ required: true })
    idNumber: string;

    @ApiProperty()
    @Prop({ required: true })
    gender: string;

    @ApiProperty()
    @Prop({ required: true })
    address: string;

    @ApiProperty()
    @Prop({ required: true })
    level: string;

    @ApiProperty()
    @Prop({ required: true })
    acadAdviser: string;

    @ApiProperty()
    @Prop({ required: true })
    course: string;
}
export const StudentsSchema = SchemaFactory.createForClass(Students);