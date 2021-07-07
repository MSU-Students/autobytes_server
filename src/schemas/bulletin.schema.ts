import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IBulletin } from 'src/interfaces/bulletin.interface';

export type BulletinDocument = Bulletin & Document;

@Schema()
export class Bulletin implements IBulletin {
    @ApiProperty()
    @Prop({required:true})
    title: string;

    @ApiProperty()
    @Prop()
    date: string;
    
    @ApiProperty()
    @Prop()
    bulletinFrom: string;
    
    @ApiProperty()
    @Prop()
    bulletinSemester: string;
    
    @ApiProperty()
    @Prop()
    bulletinType: string;
}
export const BulletinSchema = SchemaFactory.createForClass(Bulletin);