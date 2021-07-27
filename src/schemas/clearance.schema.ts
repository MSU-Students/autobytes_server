import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IClearance } from 'src/interfaces/clearance.interface';

export type ClearanceDocument = Clearance & Document;

@Schema()
export class Clearance implements IClearance{
    @ApiProperty()
    @Prop({required:true})
    name: string;

    @ApiProperty()
    @Prop({required:true})
    date: string;

    @ApiProperty()
    @Prop({required:true})
    eventName: string;

    @ApiProperty()
    @Prop({required:true})
    amount: string;

    @ApiProperty()
    @Prop({required:true})
    semester: string;

    @ApiProperty()
    @Prop({required:false})
    idNumber?: string;

    @ApiProperty()
    @Prop({required:false})
    clear?: string;
}
export const ClearanceSchema = SchemaFactory.createForClass(Clearance);