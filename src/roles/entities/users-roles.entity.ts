import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity({ schema: 'public', name: 'users_roles' })
export class UsersRoles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    role_id: string;

    @ManyToOne(() => User, (user) => user.usersRoles)
    @JoinColumn({ name: 'user_id' })
    user: User

    @ManyToOne(() => Role, (role) => role.usersRoles)
    @JoinColumn({ name: 'role_id' })
    role: Role
}
