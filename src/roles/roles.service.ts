import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>
  ) { }

  async create(createRoleDto: CreateRoleDto) {
    const user = await this.roleRepository.findOne({ where: { name: createRoleDto.name } });

    if (user) {
      throw new BadRequestException(`Role with name ${createRoleDto.name} already exists`);
    }

    return this.roleRepository.save(createRoleDto);
  }

  findAll() {
    return this.roleRepository.find();
  }

  async findOne(id: number) {
    const role = await this.roleRepository.findOne({ where: { id } });

    if (!role) {
      throw new NotFoundException(`Role with id ${id} not found`);
    }

    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.findOne(id);

    await this.roleRepository.merge(role, updateRoleDto);
    await this.roleRepository.save(role);

    return role;

  }

  async remove(id: number) {
    await this.findOne(id);

    await this.roleRepository.delete(id);
    return;
  }
}
