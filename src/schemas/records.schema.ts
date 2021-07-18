import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type RecordsDocument = Records & Document;

@Schema()
export class Records {
    @ApiProperty()
    @Prop({required:true})
    title: string;

    @ApiProperty()
    @Prop({required:true})
    date: string;

    @ApiProperty()
    @Prop({required:true})
    recordsFrom: string;

    @ApiProperty()
    @Prop({required:true})
    recordsSemester: string;

    @ApiProperty()
    @Prop({required:true})
    recordsType: string;

    @ApiProperty()
    @Prop({required:true})
    url: string;
}
export const RecordsSchema = SchemaFactory.createForClass(Records);