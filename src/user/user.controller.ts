import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/guards/jwtAuthGuard.guard";

@ApiTags('UserEndpoints')
@Controller('user')
export class UserController {

    @UseGuards(JwtAuthGuard)
    @Get()
    userMusic(): string {
        return 'Hello world';
    }

}