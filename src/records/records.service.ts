import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Records, RecordsDocument } from 'src/schemas/records.schema';

@Injectable()
export class RecordsService {
    constructor(@InjectModel(Records.name) private recordsModel: Model<RecordsDocument>) { }
    create(records: Records) {
        const createdUser = new this.recordsModel(records);
        return createdUser.save();
    }
    async findAll(): Promise<Records[]> {
        return this.recordsModel.find().exec();
    }
}
