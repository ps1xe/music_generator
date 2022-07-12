import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { SignOutDto } from "./dto/SignOut/SignOut.dto";
import { SignOutResponseDto } from "./dto/SignOut/SignOutResponse.dto";
import { SignInDto } from "./dto/SingIn/SignIn.dto";
import { SignInResponseDto } from "./dto/SingIn/SignInResponse.dto";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private JwtService: JwtService
    ) { }

    
    async login(loginDto: SignInDto): Promise<SignInResponseDto> {
        const user = await this.userRepository.findOne({
            where: {
                email: loginDto.email
            }
        })

        const isPasswordCorrect = await bcrypt.compare(loginDto.password, user.password);

        if (!user || !isPasswordCorrect) {
            throw new ForbiddenException("Неправельный email или пароль");
        }

        const jwtToken = await this.JwtService.signAsync({
            sub: user.id,
            email: user.email
        })

        return { token: jwtToken };
    }


    async registration(registrationDto: SignOutDto): Promise<SignOutResponseDto> {
        const isUserAlreadyExists = await this.userRepository.count({
            where: {
                username: registrationDto.username
            }
        });

        if (isUserAlreadyExists > 0) {
            throw new ForbiddenException("Такое имя пользователя уже используется!!!");
        }

        const hashedPassword = await bcrypt.hash(registrationDto.password, 5);
        const newUser = await this.userRepository.save({
            email: registrationDto.email,
            username: registrationDto.username,
            password: hashedPassword
        });

        const jwtToken = await this.JwtService.signAsync({
            sub: newUser.id,
            email: newUser.email
        })

        return { token: jwtToken };
    }

}