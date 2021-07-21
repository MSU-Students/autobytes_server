import { Body, Controller, Get, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Bulletin } from 'src/schemas/bulletin.schema';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';
import { BulletinService } from './bulletin.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('bulletin')
export class BulletinController {
    constructor(private bulletinService: BulletinService) { }
    @ApiBody({ type: Bulletin })
    @ApiOperation({ summary: 'Add new Bulletin', operationId: 'AddBulletin' })
    @ApiResponse({ status: 200, type: Bulletin })
    @Post('/create')
    create(@Body() bulletin: Bulletin) {
        return this.bulletinService.create(bulletin);
    }

    @ApiOperation({ summary: 'Get all Bulletin', operationId: 'GetBulletins' })
    @ApiResponse({ status: 200, type: Bulletin })
    @Get('/all')
    async findAll() {
        return this.bulletinService.findAll();
    }

    @ApiOperation({ summary: 'Get Bulletin by id', operationId: 'GetBulletin' })
    @ApiResponse({ status: 200, type: Bulletin })
    @Get('id')
    async findById(@Query('id') id: string) {
        return await this.bulletinService.findById(id);
    }

    @ApiOperation({ summary: 'Update Bulletin by id', operationId: 'UpdateBulletin' })
    @ApiResponse({ status: 200, type: Bulletin })
    @Put('/update')
    async update(@Query('id') id: string, @Body() Bulletin: Bulletin) {
        return await this.bulletinService.update(id,Bulletin);
    }
    
    @ApiOperation({ summary: 'Delete Bulletin by id', operationId: 'DeleteBulletin' })
    @ApiResponse({ status: 200, type: Bulletin })
    @Delete('/delete')
    async delete(@Query('id') id: string) {
        return await this.bulletinService.delete(id);
    }
}
