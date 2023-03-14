import { AxiosResponse } from "axios";
import $api from "../http/index";
import { GenerateBody, GeneratedSound, Sounds } from "../types/sound.types.js";

export default class SoundService {
  static async getSounds(page: number): Promise<AxiosResponse<Sounds>> {
    return (
      await $api.get(
        "http://localhost:4000/users/getSounds?take=10&order=DESC",
        { params: { page: page } }
      )
    ).data;
  }

  static async generateSounds(
    generationOptions: GenerateBody
  ): Promise<AxiosResponse<GeneratedSound>> {
    return (
      await $api.post("http://localhost:4000/ml/generate", generationOptions)
    ).data;
  }
}
