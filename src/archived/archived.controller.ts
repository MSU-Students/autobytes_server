import { Body, Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Archived } from 'src/schemas/archived.schema';
import { ArchivedService } from './archived.service';

@Controller('archived')
export class ArchivedController {
    constructor(private archivedService: ArchivedService) { }

    @ApiBody({ type: Archived })
    @ApiOperation({ summary: 'Add new Archived', operationId: 'AddArchived' })
    @ApiResponse({ status: 200, type: Archived })
    @Post('/create')
    create(@Body() archived: Archived) {
        return this.archivedService.create(archived);
    }

    @ApiOperation({ summary: 'Get all Archived', operationId: 'GetArchives' })
    @ApiResponse({ status: 200, type: Archived })
    @Get('/all')
    async findAll() {
        return this.archivedService.findAll();
    }

    @ApiOperation({ summary: 'Get Archived by id', operationId: 'GetArchive' })
    @ApiResponse({ status: 200, type: Archived })
    @Get('id')
    async findById(@Query('id') id: string) {
        return await this.archivedService.findById(id);
    }

    @ApiOperation({ summary: 'Update Archived by id', operationId: 'UpdateArchived' })
    @ApiResponse({ status: 200, type: Archived })
    @Put('/update')
    async update(@Query('id') id: string, @Body() Archived: Archived) {
        return await this.archivedService.update(id, Archived);
    }

    @ApiOperation({ summary: 'Delete Archived by id', operationId: 'DeleteArchived' })
    @ApiResponse({ status: 200, type: Archived })
    @Delete('/delete')
    async delete(@Query('id') id: string) {
        return await this.archivedService.delete(id);
    }

}
