import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {IsEmail, IsString, MinLength} from 'class-validator';


export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsEmail()
    name: string;

    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}
