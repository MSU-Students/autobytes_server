import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Students, StudentsDocument } from 'src/schemas/students.schema';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Students.name) private studentsModel: Model<StudentsDocument>) { }
  create(student: Students[]): Promise<Students[]> {
    return this.studentsModel.create(student);
  }
  async findAll(): Promise<Students[]> {
    return this.studentsModel.find().exec();
  }
  async findById(id: string): Promise<Students> {
    return this.studentsModel.findById(id).exec();
  }

  async update(id: string, student: Students): Promise<any> {
    return await this.studentsModel.findByIdAndUpdate(id, student, {
      new: true,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.studentsModel.findByIdAndRemove(id);
  }
}
