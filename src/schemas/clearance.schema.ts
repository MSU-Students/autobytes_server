import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ClearanceDocument = Clearance & Document;

@Schema()
export class Clearance {
    @ApiProperty()
    @Prop({required:true})
    firstName: string;

    @ApiProperty()
    @Prop({required:true})
    lastName: string;
}
export const ClearanceSchema = SchemaFactory.createForClass(Clearance);