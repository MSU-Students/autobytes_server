import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IUser } from 'src/interfaces/user.interface';

export type UserDocument = User & Document;

@Schema()
export class User implements IUser {

    @ApiProperty()
    @Prop({ required: true })
    studentName: string;

    @ApiProperty()
    @Prop({ required: true })
    id: string;

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
export const UserSchema = SchemaFactory.createForClass(User);