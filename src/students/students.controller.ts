import { Body, Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Students } from 'src/schemas/students.schema';
import { StudentsService } from './students.service';


@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) { }

  @ApiBody({ type: [Students] })
  @ApiOperation({ summary: 'Add new Students', operationId: 'AddStudents' })
  @ApiResponse({ status: 200, type: [Students] })
  @Post('/create')
  create(@Body() students: Students[]) {
    return this.studentsService.create(students);
  }

  @ApiOperation({ summary: 'Get all Students', operationId: 'GetStudents' })
  @ApiResponse({ status: 200, type: [Students] })
  @Get('/all')
  async findAll() {
    return this.studentsService.findAll();
  }

  @ApiOperation({ summary: 'Get Student by id', operationId: 'GetStudent' })
  @ApiResponse({ status: 200, type: Students })
  @Get('id')
  async findById(@Query('id') id: string) {
    return await this.studentsService.findById(id);
  }

  @ApiOperation({ summary: 'Update student by id', operationId: 'UpdateStudent' })
  @ApiResponse({ status: 200, type: Students })
  @Put('/update')
  async update(@Query('id') id: string, @Body() student: Students) {
    return await this.studentsService.update(id, student);
  }

  @ApiOperation({ summary: 'Delete student by id', operationId: 'DeleteStudent' })
  @ApiResponse({ status: 200, type: Students })
  @Delete('/delete')
  async delete(@Query('id') id: string) {
    return await this.studentsService.delete(id);
  }
}
