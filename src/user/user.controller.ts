import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService) {}
    @Post()
    create(@Body()user: User) {
        console.log(user);
        return this.userService.create(user);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }
}
