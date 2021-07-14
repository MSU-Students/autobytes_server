import { Body, Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @ApiBody({ type: [User] })
  @ApiOperation({ summary: 'Add new users', operationId: 'AddUsers' })
  @ApiResponse({ status: 200, type: [User] })
  @Post('/create')
  create(@Body() user: User[]) {
    return this.userService.create(user);
  }

  @ApiOperation({ summary: 'Get all users', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('/all')
  async findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Get user by id', operationId: 'GetUser' })
  @ApiResponse({ status: 200, type: User })
  @Get('id')
  async findById(@Query('id') id: string) {
    return await this.userService.findById(id);
  }

  @ApiOperation({ summary: 'Update user by id', operationId: 'UpdateUser' })
  @ApiResponse({ status: 200, type: User })
  @Put('/update')
  async update(@Query('id') id: string, @Body() User: User) {
    return await this.userService.update(id, User);
  }

  @ApiOperation({ summary: 'Delete user by id', operationId: 'DeleteUser' })
  @ApiResponse({ status: 200, type: User })
  @Delete('/delete')
  async delete(@Query('id') id: string) {
    return await this.userService.delete(id);
  }
}
