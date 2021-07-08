import { Body, Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Attendance } from 'src/schemas/attendance.schema';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
    constructor(private attendanceService:AttendanceService) {}
    @ApiBody({ type: Attendance })
  @ApiOperation({ summary: 'Add new Attendance', operationId: 'AddAttendance' })
  @ApiResponse({ status: 200, type: Attendance })
  @Post('/create')
  create(@Body() Attendance: Attendance) {
    return this.attendanceService.create(Attendance);
  }

  @ApiOperation({ summary: 'Get all Attendance', operationId: 'GetAttendance' })
  @ApiResponse({ status: 200, type: Attendance })
  @Get('/all')
  async findAll() {
    return this.attendanceService.findAll();
  }

  @ApiOperation({ summary: 'Get Attendance by id', operationId: 'GetAttendance' })
  @ApiResponse({ status: 200, type: Attendance })
  @Get('id')
  async findById(@Query('id') id: string) {
    return await this.attendanceService.findById(id);
  }

  @ApiOperation({ summary: 'Update Attendance by id', operationId: 'UpdateAttendance' })
  @ApiResponse({ status: 200, type: Attendance })
  @Put('/update')
  async update(@Query('id') id: string, @Body() Attendance: Attendance) {
    return await this.attendanceService.update(id, Attendance);
  }

  @ApiOperation({ summary: 'Delete Attendance by id', operationId: 'DeleteAttendance' })
  @ApiResponse({ status: 200, type: Attendance })
  @Delete('/delete')
  async delete(@Query('id') id: string) {
    return await this.attendanceService.delete(id);
  }
}
