import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Records, RecordsDocument } from 'src/schemas/records.schema';

@Injectable()
export class RecordsService {
    constructor(@InjectModel(Records.name) private recordsModel: Model<RecordsDocument>) { }
    create(records: Records) {
        const createdRecords = new this.recordsModel(records);
        return createdRecords.save();
    }
    async findAll(): Promise<Records[]> {
        return this.recordsModel.find().exec();
    }
    async findById(id: string): Promise<Records> {
        return this.recordsModel.findById(id).exec();
    }

    async update(id: string, Records: Records): Promise<any> {
        return await this.recordsModel.findByIdAndUpdate(id, Records, {
            new: true,
        });
    }
    async delete(id: string): Promise<any> {
        return await this.recordsModel.findByIdAndRemove(id);
    }
}
