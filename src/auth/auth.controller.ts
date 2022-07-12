import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { SignOutDto } from "./dto/SignOut/SignOut.dto";
import { SignOutResponseDto } from "./dto/SignOut/SignOutResponse.dto";
import { SignInDto } from "./dto/SingIn/SignIn.dto";
import { SignInResponseDto } from "./dto/SingIn/SignInResponse.dto";

@ApiTags('Auth')
@Controller()
export class AuthController {

    constructor(public AuthService: AuthService) { }

    @Post('/SignIn')
    @ApiBody({ type: [SignInDto] })
    async signIn(@Body() res: SignInDto): Promise<SignInResponseDto> {
        return this.AuthService.login(res);
    }

    @Post('/SignOut')
    @ApiBody({ type: [SignOutDto] })
    async signOut(@Body() res: SignOutDto): Promise<SignOutResponseDto> {
        return this.AuthService.registration(res);
    }


}  