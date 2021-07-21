import { Body, Controller, Get, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/schemas/user.schema';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserService } from './user.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService, private authService: AuthService) { }

  @ApiBody({ type: User })
  @ApiOperation({ summary: 'Add new user', operationId: 'AddUser' })
  @ApiResponse({ status: 200, type: User })
  @Post('/create')
  create(@Body() user: User) {
    return this.authService.register(user);
  }

  
  @ApiOperation({ summary: 'Get all users', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: User })
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
}
