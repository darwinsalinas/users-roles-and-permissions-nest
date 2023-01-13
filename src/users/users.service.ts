import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto, UserDto } from './user.dto';
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

    async store(data: UserDto) {
        const user = await this.usersRepository.save(data);

        return user;
    }

    async update(id: number, data: UpdateUserDto) {
        const user = await this.usersRepository.findOneBy({ id });

        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        const updated = await this.usersRepository.merge(user, data);

        return updated;
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
