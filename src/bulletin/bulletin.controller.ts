import { Body, Controller, Get, Post } from '@nestjs/common';
import { Bulletin } from 'src/schemas/bulletin.schema';
import { BulletinService } from './bulletin.service';

@Controller('bulletin')
export class BulletinController {
    constructor(private bulletinService: BulletinService) { }
    @Post()
    create(@Body() bulletin: Bulletin) {
        console.log(bulletin);
        return this.bulletinService.create(bulletin);
    }

    @Get()
    async findAll() {
        return this.bulletinService.findAll();
    }
}
