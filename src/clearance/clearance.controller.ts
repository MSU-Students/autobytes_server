import { Body, Controller, Get, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Clearance } from 'src/schemas/clearance.schema';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';
import { ClearanceService } from './clearance.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('clearance')
export class ClearanceController {
    constructor(private clearanceService: ClearanceService) { }

    @ApiBody({ type: Clearance })
    @ApiOperation({ summary: 'Add new clearance', operationId: 'AddClearance' })
    @ApiResponse({ status: 200, type: Clearance })
    @Post('/create')
    create(@Body() clearance: Clearance) {
        return this.clearanceService.create(clearance);
    }

    @ApiOperation({ summary: 'Get all clearance', operationId: 'GetClearances' })
    @ApiResponse({ status: 200, type: Clearance })
    @Get('/all')
    async findAll() {
        return this.clearanceService.findAll();
    }

    @ApiOperation({ summary: 'Get clearance by id', operationId: 'GetClearance' })
    @ApiResponse({ status: 200, type: Clearance })
    @Get('id')
    async findById(@Query('id') id: string) {
       return this.clearanceService.findById(id);
    }

    @ApiOperation({ summary: 'Get clearance by ID Number', operationId: 'GetLiability' })
    @ApiResponse({ status: 200, type: Clearance })
    @Get('idNumber')
    async findOne(@Query('idNumber') idNumber: string) {
       return this.clearanceService.findOne(idNumber);
    }

    @ApiOperation({ summary: 'Update clearance by id', operationId: 'UpdateClearance' })
    @ApiResponse({ status: 200, type: Clearance })
    @Put('/update')
    async update(@Query('id') id: string, @Body() Clearance: Clearance) {
        return await this.clearanceService.update(id, Clearance);
    }

    @ApiOperation({ summary: 'Delete clearance by id', operationId: 'DeleteClearance' })
    @ApiResponse({ status: 200, type: Clearance })
    @Delete('/delete')
    async delete(@Query('id') id: string) {
        return await this.clearanceService.delete(id);
    }

    @ApiOperation({ summary: 'Delete All clearance by id', operationId: 'DeleteAllClearances' })
    @ApiResponse({ status: 200, type: Clearance })
    @Delete('/deleteAll')
    async deleteAll() {
        return await this.clearanceService.deleteAll();
    }
}
