import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IArchived } from 'src/interfaces/archived.interface';

export type ArchivedDocument = Archived & Document;

@Schema()
export class Archived implements IArchived {

    @ApiProperty()
    @Prop({required:true})
    date: string;

    @ApiProperty()
    @Prop({required:true})
    file: string;
}
export const ArchivedSchema = SchemaFactory.createForClass(Archived);