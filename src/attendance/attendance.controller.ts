import { Body, Controller, Get, Post } from '@nestjs/common';
import { Attendance } from 'src/schemas/attendance.schema';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
    constructor(private attendanceService:AttendanceService) {}
    @Post()
    create(@Body()attendance: Attendance) {
        console.log(attendance);
        return this.attendanceService.create(attendance);
    }

    @Get()
    async findAll() {
        return this.attendanceService.findAll();
    }
}
