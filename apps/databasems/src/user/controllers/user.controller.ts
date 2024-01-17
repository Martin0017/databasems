import { Controller, Get, Param, Post, Body, Put, Delete, Header } from '@nestjs/common';
import { UserService } from '../services/user.service';

interface UserResponse {
  data: any[]; // Ajusta esto según la estructura real de tus datos
  'X-Total-Count': number;
}

@Controller('api_db/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Post('search')
    findByEmail(@Body() searchItemDto: any) {
        return this.userService.findOneUserByMail(searchItemDto.correo_user);
    }

    @Post()
    create(@Body() body: any) {
        return this.userService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
        return this.userService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}
