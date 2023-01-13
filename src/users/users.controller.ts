import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto, CreateUserDto } from './dtos';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(private readonly service: UsersService) { }

    @Get('/')
    findAll() {
        return this.service.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id)
    }

    @Post()
    store(@Body() data: CreateUserDto) {
        return this.service.store(data)
    }

    @Patch(':id')
    update(@Body() data: UpdateUserDto, @Param('id', ParseIntPipe) id) {
        return this.service.update(id, data);
    }

    @Delete(':id')
    destroy(@Param('id', ParseIntPipe) id) {
        return this.service.destroy(id);
    }
}
