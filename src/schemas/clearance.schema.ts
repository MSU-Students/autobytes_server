import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ClearanceDocument = Clearance & Document;

@Schema()
export class Clearance {
    @ApiProperty()
    @Prop({required:true})
    file: string;

    @ApiProperty()
    @Prop({required:true})
    date: string;

    @ApiProperty()
    @Prop({required:true})
    semester: string;

    @ApiProperty()
    @Prop({required:true})
    eventName: string;

    @ApiProperty()
    @Prop({required:true})
    amount: string;

    @ApiProperty()
    @Prop({required:true})
    addedBy: string;
}
export const ClearanceSchema = SchemaFactory.createForClass(Clearance);