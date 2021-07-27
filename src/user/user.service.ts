import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  async setCurrentRefreshToken(refreshToken: string, userId: any) {
    const user = await this.findById(userId);
    if (user) {
      user.refreshToken = refreshToken;
      await this.update(userId, user);
    }
  }
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
  create(user: User): Promise<User> {
    return this.userModel.create(user);
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().setOptions({
      projection: {password: 0, refreshToken: 0}
    })
  }
  async findById(id: string): Promise<User> {
    const result = await this.userModel.findById(id);
    return result.toJSON();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({userName: username}).exec();
  }

  async update(id: string, user: User): Promise<any> {
    return await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
  }

  async deleteById(id:string): Promise<any> {
    return await this.userModel.findByIdAndDelete(id)
  }
}
