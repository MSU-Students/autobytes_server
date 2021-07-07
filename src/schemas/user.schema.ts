import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IUser } from 'src/interfaces/user.interface';

export type UserDocument = User & Document;

@Schema()
export class User implements IUser {

    @ApiProperty()
    @Prop({required:true})
    firstName: string;

    @ApiProperty()
    @Prop({required:true})
    lastName: string;

    @ApiProperty()
    @Prop({required:true})
    email: string;

    @ApiProperty()
    @Prop({required:true})
    course: string;

    @ApiProperty()
    @Prop({required:true})
    idNumber: string;
}
export const UserSchema = SchemaFactory.createForClass(User);