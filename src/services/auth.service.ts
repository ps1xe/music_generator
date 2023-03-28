import { AxiosResponse } from "axios";
import $api from "../http/index";
import {
  Profile,
  GetLinkToResetPasswordBody,
  LoginBody,
  RegistrationBody,
  ResetPasswordBody,
} from "../types/auth.types.js";

export default class AuthService {
  static async login(loginBody: LoginBody): Promise<AxiosResponse<Profile>> {
    return (await $api.put("http://localhost:4000/auth/login", loginBody)).data;
  }

  static async registration(
    registationBody: RegistrationBody
  ): Promise<AxiosResponse<Profile>> {
    return (
      await $api.post("http://localhost:4000/auth/register", registationBody)
    ).data;
  }

  static async resetPassword(
    resetBody: ResetPasswordBody
  ): Promise<AxiosResponse<Profile>> {
    return (
      await $api.post(
        "http://localhost:4000/auth/resetPassword/" + resetBody.token,
        resetBody
      )
    ).data;
  }

  static async verificationRecoveryToken(
    token: string
  ): Promise<AxiosResponse<Profile>> {
    return (await $api.get("http://localhost:4000/auth/verificationRecoveryToken/" + token))
      .data;
  }

  static async updateTokens(): Promise<AxiosResponse<Profile>> {
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
