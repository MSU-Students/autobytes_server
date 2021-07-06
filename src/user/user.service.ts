import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
    create(user: User) {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
