import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entity/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: process.env.SECRET_KEY, signOptions: { expiresIn: process.env.TOKEN_LIFE } })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule { }