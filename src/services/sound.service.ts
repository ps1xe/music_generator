import { AxiosResponse } from "axios";
import $api from "../http/index";
import { GenerateBody, GeneratedSound, Sounds } from "../types/sound.types";
import AuthService from "./auth.service";

export default class SoundService {
  static async getSounds(page: number): Promise<AxiosResponse<Sounds>> {
    try {
      return (
        await $api.get("http://localhost:4000/users/getSounds", {
          withCredentials: true,
          params: { page: page, take: 8, order: "DESC" },
        })
      ).data;
    } catch (error) {
      console.log(error);
      await AuthService.updateTokens();
      return (
        await $api.get("http://localhost:4000/users/getSounds", {
          withCredentials: true,
          params: { page: page, take: 8, order: "DESC" },
        })
      ).data;
    }
  }

  static async generateSounds(
    generationOptions: GenerateBody
  ): Promise<AxiosResponse<GeneratedSound>> {
    try {
      return (
        await $api.post("http://localhost:4000/ml/generate", generationOptions)
      ).data;
    } catch (error) {
      await AuthService.updateTokens();
      return (
        await $api.post("http://localhost:4000/ml/generate", generationOptions)
      ).data;
    }
  }
}
