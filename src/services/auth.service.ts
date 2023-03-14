import { AxiosResponse } from "axios";
import $api from "../http/index";
import {
  AuthenticationResponse,
  GetLinkToResetPasswordBody,
  LoginBody,
  RegistrationBody,
} from "../types/auth.types.js";

export default class AuthService {
  static async login(
    loginBody: LoginBody
  ): Promise<AxiosResponse<AuthenticationResponse>> {
    return (await $api.put("http://localhost:4000/auth/login", loginBody)).data;
  }

  static async registration(
    registationBody: RegistrationBody
  ): Promise<AxiosResponse<AuthenticationResponse>> {
    return (
      await $api.post("http://localhost:4000/auth/register", registationBody)
    ).data;
  }

  static async updateTokens(): Promise<AxiosResponse<AuthenticationResponse>> {
    return (await $api.post("http://localhost:4000/auth/updateTokens")).data;
  }

  static async getLinkToResetPassword(
    getLinkToResetPasswordBody: GetLinkToResetPasswordBody
  ): Promise<AxiosResponse<object>> {
    return (
      await $api.post(
        "http://localhost:4000/auth/getLinkToResetPassword",
        getLinkToResetPasswordBody
      )
    ).data;
  }
}
