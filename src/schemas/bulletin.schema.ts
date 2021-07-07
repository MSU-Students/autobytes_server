import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BulletinDocument = Bulletin & Document;

@Schema()
export class Bulletin {
    @Prop({required:true})
    firstName: string;
    @Prop()
    lastName: string;
}
export const BulletinSchema = SchemaFactory.createForClass(Bulletin);