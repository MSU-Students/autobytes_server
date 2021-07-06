import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attendance, AttendanceDocument } from 'src/schemas/attendance.schema';

@Injectable()
export class AttendanceService {
    constructor(@InjectModel(Attendance.name) private attendanceModel: Model<AttendanceDocument>){}
    create(attendance: Attendance) {
        const createdAttendance = new this.attendanceModel(attendance);
        return createdAttendance.save();
    }
    async findAll(): Promise<Attendance[]> {
        return this.attendanceModel.find().exec();
    }
}
