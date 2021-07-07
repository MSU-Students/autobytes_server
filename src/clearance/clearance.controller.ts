import { Body, Controller, Get, Post } from '@nestjs/common';
import { Clearance } from 'src/schemas/clearance.schema';
import { ClearanceService } from './clearance.service';

@Controller('clearance')
export class ClearanceController {
    constructor(private clearanceService:ClearanceService) {}
    @Post()
    create(@Body()clearance: Clearance) {
        console.log(clearance);
        return this.clearanceService.create(clearance);
    }

    @Get()
    async findAll() {
        return this.clearanceService.findAll();
    }
}
