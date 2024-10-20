// auth/dto/login-user.dto.ts
import { IsEmail, IsString } from "class-validator";

export class LoginUserDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}