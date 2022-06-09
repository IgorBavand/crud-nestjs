import {IsEmail, IsString, MinLength} from 'class-validator';

export class CreateUserDto {

    @IsEmail()
    name: string;

    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}
