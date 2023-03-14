import { AxiosResponse } from "axios";
import $api from "../http/index.js";
import {
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
}
