import { AxiosResponse } from "axios";
import $api from "../http/index";
import { Profile } from "../types/auth.types";
import {
  ChangeNicknameBody,
  ChangePasswordBody,
  ChangingAvatarResponse,
} from "../types/users.types.js";
import AuthService from "./auth.service";

export default class UsersService {
  static async changingAvatar(
    formData: FormData
  ): Promise<AxiosResponse<ChangingAvatarResponse>> {
    try {
      return (
        await $api.post("http://localhost:4000/users/changingAvatar", formData)
      ).data;
    } catch (error) {
      await AuthService.updateTokens();
      return (
        await await $api.post("http://localhost:4000/users/changingAvatar", formData)
      ).data;
    }
  }

  static async changePassword(
    passwords: ChangePasswordBody
  ): Promise<AxiosResponse<object>> {
    try {
      return (
        await $api.post("http://localhost:4000/users/changePassword", passwords)
      ).data;
    } catch (error) {
      await AuthService.updateTokens();
      return (
        await $api.post("http://localhost:4000/users/changePassword", passwords)
      ).data;
    }
  }

  static async getProfile(): Promise<AxiosResponse<Profile>> {
    try {
      return (await $api.get("http://localhost:4000/users/getProfile")).data;
    } catch (error) {
      await AuthService.updateTokens();
      return (await $api.get("http://localhost:4000/users/getProfile")).data;
    }
  }

  static async changeNickname(
    changeNicknameBody: ChangeNicknameBody
  ): Promise<AxiosResponse<object>> {
    try {
      return (
        await $api.post(
          "http://localhost:4000/users/changeNickname",
          changeNicknameBody
        )
      ).data;
    } catch (error) {
      await AuthService.updateTokens();
      return (
        await $api.post(
          "http://localhost:4000/users/changeNickname",
          changeNicknameBody
        )
      ).data;
    }
  }
}
