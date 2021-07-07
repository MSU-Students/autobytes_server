import { Body, Controller, Get, Post } from '@nestjs/common';
import { Records } from 'src/schemas/records.schema';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
    constructor(private recordsService:RecordsService) {}
    @Post()
    create(@Body()records: Records) {
        console.log(records);
        return this.recordsService.create(records);
    }

    @Get()
    async findAll() {
        return this.recordsService.findAll();
    }
}
