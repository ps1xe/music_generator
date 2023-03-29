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
  ): Promise<AxiosResponse<void>> {
    return (
      await $api.post(
        "http://localhost:4000/auth/resetPassword/" + resetBody.token,
        { newPassword: resetBody.newPassword }
      )
    ).data;
  }

  static async verificationRecoveryToken(
    token: string
  ): Promise<AxiosResponse<boolean, any>> {
    try {
      return (
        await $api.get(
          "http://localhost:4000/auth/verificationRecoveryToken/" + token
        )
      ).data;
    } catch (error: any) {
      const responseFaile: AxiosResponse<any, any> = {
        data: false,
        status: error.response ? error.response.status : 500,
        statusText: error.response
          ? error.response.statusText
          : "Internal Server Error",
        headers: error.response ? error.response.headers : {},
        config: error.config,
      };
      return responseFaile.data;
    }
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
