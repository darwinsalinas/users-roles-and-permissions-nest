export interface UserDto {
    name: string;
    email: string;
    password: string;
    date_of_birth: string;
    gender: string;
    dni: string;
    address: string;
    country: string;
    phone_number: string;
    roles?: string[];
    permissions?: string[];
}

export type UpdateUserDto = Partial<UserDto>;
