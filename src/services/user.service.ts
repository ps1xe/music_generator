import { AxiosResponse } from "axios";
import $api from "../http/index";
import { Profile } from "../types/auth.types.js";
import {
  ChangeNicknameBody,
  ChangePasswordBody,
  ChangingAvatarResponse,
} from "../types/users.types.js";

export default class UsersService {
  static async changingAvatar(
    formData: FormData
  ): Promise<AxiosResponse<ChangingAvatarResponse>> {
    return (
      await $api.post("http://localhost:4000/users/changingAvatar", formData)
    ).data;
  }

  static async changePassword(
    passwords: ChangePasswordBody
  ): Promise<AxiosResponse<object>> {
    return (
      await $api.post("http://localhost:4000/users/changePassword", passwords)
    ).data;
  }

  static async getProfile(): Promise<AxiosResponse<Profile>> {
    return (await $api.get("http://localhost:4000/users/getProfile")).data;
  }

  static async changeNickname(
    changeNicknameBody: ChangeNicknameBody
  ): Promise<AxiosResponse<object>> {
    return (
      await $api.post(
        "http://localhost:4000/users/changeNickname",
        changeNicknameBody
      )
    ).data;
  }
}
