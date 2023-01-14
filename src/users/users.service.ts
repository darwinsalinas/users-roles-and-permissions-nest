import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto, CreateUserDto } from './dtos';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    findAll() {
        return this.usersRepository.find();
    }

    async findOne(id: number) {
        const user = await this.usersRepository.findOneBy({ id });

        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        return user;
    }

    async store(data: CreateUserDto) {
        const userWithEmailExists = await this.usersRepository.findOne({ where: { email: data.email } });

        if (userWithEmailExists) {
            throw new BadRequestException('Email already registered')
        }

        const savedUser = await this.usersRepository.save(data);

        const user = await this.usersRepository.findOneBy({ id: savedUser.id });

        return user;
    }

    async update(id: number, data: UpdateUserDto) {
        const user = await this.findOne(id);

        await this.usersRepository.merge(user, data);
        await this.usersRepository.save(user);

        return user;
    }

    async destroy(id: number) {
        const user = await this.usersRepository.findOneBy({ id });

        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        await this.usersRepository.delete(user.id);

        return user;
    }
}
