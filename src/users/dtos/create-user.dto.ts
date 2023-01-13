import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword } from 'class-validator';
import { Gender } from '../user.entity';

export class CreateUserDto {

    @IsString()
    @ApiProperty()
    name: string;

    @IsEmail()
    @ApiProperty()
    email: string;

    @IsStrongPassword()
    @ApiProperty()
    password: string;

    @IsDateString()
    @ApiProperty()
    date_of_birth: string;

    @IsString()
    @ApiProperty()
    gender: Gender;

    @IsString()
    @ApiProperty()
    dni: string;

    @IsString()
    @ApiProperty()
    address: string;

    @IsString()
    @ApiProperty()
    country: string;

    @IsString()
    @ApiProperty()
    phone_number: string;

    @IsString({ each: true })
    @IsOptional()
    @ApiProperty()
    roles?: string[];

    @IsString({ each: true })
    @IsOptional()
    @ApiProperty()
    permissions?: string[];
}
