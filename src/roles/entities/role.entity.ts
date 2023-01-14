import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { UsersRoles } from './users-roles.entity';

@Entity({ schema: 'public', name: 'roles' })
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => UsersRoles, usersRoles => usersRoles.role)
    usersRoles: UsersRoles[]
}
