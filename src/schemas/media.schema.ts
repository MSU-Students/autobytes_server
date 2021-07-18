import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IMedia } from 'src/interfaces/media.interface';

export type MediaDocument = Media & Document;

@Schema()
export class Media implements IMedia {
    @ApiProperty()
    @Prop()
    mimeType: string;
    @ApiProperty({required: false})
    @Prop()
    id?: string;
    @ApiProperty({required: false})
    @Prop()
    filename?: string;
    
    @Prop({type: String})
    content: string;
    
}
export const MediaSchema = SchemaFactory.createForClass(Media);