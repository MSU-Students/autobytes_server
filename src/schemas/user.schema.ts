import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IUser } from 'src/interfaces/user.interface';

export type UserDocument = User & Document;

@Schema()
export class User implements IUser {

    @ApiProperty({ example: "admin" })
    @Prop({ required: true })
    userName: string;

    @ApiProperty({ example: "20219991" })
    @Prop({ required: true })
    idNumber: string;

    @ApiProperty({ example: "Joe" })
    @Prop({ required: true })
    firstName: string;

    @ApiProperty({ example: "Kuala" })
    @Prop({ required: true })
    lastName: string;

    @ApiProperty({ required: false })
    @Prop({ required: false })
    refreshToken?: string;

    @ApiProperty({ required: false, example: "oddmin" })
    @Prop({ required: false })
    password?: string;

    @ApiProperty({ example: "admin" })
    @Prop({ required: true })
    userType: string;

    @ApiProperty({ default: false, required: false })
    @Prop({ required: true, default: false })
    disabled?: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);