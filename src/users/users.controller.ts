
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    getAll() {
        return this.service.getUsers()
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: CreateUserDto) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }

    @Get(':id/drops')
    getDrops(@Param() params) {
        return this.service.getUserDrops(params.id)
    }
}
