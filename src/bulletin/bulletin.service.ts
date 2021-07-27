import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bulletin, BulletinDocument } from 'src/schemas/bulletin.schema';

@Injectable()
export class BulletinService {
    constructor(@InjectModel(Bulletin.name) private bulletinModel: Model<BulletinDocument>) { }
    create(bulletin: Bulletin) {
        const createdBulletin = new this.bulletinModel(bulletin);
        return createdBulletin.save();
    }
    async findAll(): Promise<Bulletin[]> {
        return this.bulletinModel.find().exec();
    }
    async findById(id: string): Promise<Bulletin> {
        return this.bulletinModel.findById(id).exec();
    }

    async update(id: string, Bulletin: Bulletin): Promise<any> {
        return await this.bulletinModel.findByIdAndUpdate(id, Bulletin, {
            new: true,
        });
    }
    async delete(id: string): Promise<any> {
        return await this.bulletinModel.findByIdAndRemove(id);
    }

    async deleteAll(): Promise<any> {
        return await this.bulletinModel.deleteMany()
    }
}
