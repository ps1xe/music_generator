import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, StrategyOptions, ExtractJwt } from "passport-jwt";
import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";

require('dotenv').config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY,
            ignoreExpiration: false
        } as StrategyOptions);
    }

    async validate(payload: { sub: string }): Promise<User> {
        const userId = payload.sub;
        return this.userRepository.findOneOrFail({
            where: {
                id: userId
            }
        });
    }

}

