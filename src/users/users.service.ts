
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "src/users/user.entity";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    getUsers(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["firstName", "lastName", "birthday", "isActive"],
            where: [{ "id": _id }]
        });
    }

    createUser(user: CreateUserDto) {
       return this.usersRepository.save(user)
    }

    async getUserDrops(id: number) {
        const user: User = await User.findOne({where: {id}, relations: ['drops']});
        if(!user){
            throw new HttpException('User not Found', HttpStatus.NOT_FOUND)
        }
        return user.drops;
    }

    async updateUser(user: User) {
        await this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        await this.usersRepository.delete(user);
    }
}
