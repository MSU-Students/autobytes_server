import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Archived, ArchivedDocument } from 'src/schemas/archived.schema';

@Injectable()
export class ArchivedService {
  constructor(@InjectModel(Archived.name) private archivedModel: Model<ArchivedDocument>) { }
  create(archived: Archived) {
    const createdArchived = new this.archivedModel(archived);
    return createdArchived.save();
  }
  async findAll(): Promise<Archived[]> {
    return this.archivedModel.find().exec();
  }
  async findById(id: string): Promise<Archived> {
    return this.archivedModel.findById(id).exec();
  }

  async update(id: string, Archived: Archived): Promise<any> {
    return await this.archivedModel.findByIdAndUpdate(id, Archived, {
      new: true,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.archivedModel.findByIdAndRemove(id);
  }
}
