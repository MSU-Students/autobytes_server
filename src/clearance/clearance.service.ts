import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clearance, ClearanceDocument } from 'src/schemas/clearance.schema';

@Injectable()
export class ClearanceService {
    constructor(@InjectModel(Clearance.name) private clearanceModel: Model<ClearanceDocument>) { }
    create(clearance: Clearance) {
        const createdClearance = new this.clearanceModel(clearance);
        return createdClearance.save();
    }
    async findAll(): Promise<Clearance[]> {
        return this.clearanceModel.find().exec();
    }
    async findById(id: string): Promise<Clearance> {
        const result = await this.clearanceModel.findById(id);
        return result.toJSON();
    }
    async findOne(id: string): Promise<Clearance> {
        const result = await this.clearanceModel.findOne({ idNumber: id });
        return result.toJSON();
    }

    async update(id: string, Clearance: Clearance): Promise<any> {
        return await this.clearanceModel.findByIdAndUpdate(id, Clearance, {
            new: true,
        });
    }
    async delete(id: string): Promise<any> {
        return await this.clearanceModel.findByIdAndRemove(id);
    }

    async deleteAll(): Promise<any> {
        return await this.clearanceModel.deleteMany();
    }
}
