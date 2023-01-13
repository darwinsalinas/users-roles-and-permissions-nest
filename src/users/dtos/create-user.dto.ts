import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword } from 'class-validator';
import { Gender } from '../user.entity';

export class CreateUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

    @IsDateString()
    date_of_birth: string;

    @IsString()
    gender: Gender;

    @IsString()
    dni: string;

    @IsString()
    address: string;

    @IsString()
    country: string;

    @IsString()
    phone_number: string;

    @IsString({ each: true })
    @IsOptional()
    roles?: string[];

    @IsString({ each: true })
    @IsOptional()
    permissions?: string[];
}
