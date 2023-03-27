import { GenerateBody, Sounds } from "../../types/sound.types";

export const requestSoundSuccess = (type: SoundActions, payload?: any) => ({
  type,
  payload,
});

export const requestSoundFailed = () => ({
  type: "REQUEST_SOUND_FAILED",
});

export enum SoundActions {
  GET_SOUNDS = "GET_SOUNDS",
  GENERATE_SOUND = "GENERATE_SOUNDS",
  SUCCESS_GET_SOUNDS = "SUCCESS_GET_SOUNDS",
  SUCCESS_GENERATE_SOUND_LOADING = "SUCCESS_GENERATE_SOUND_LOADING",
  SUCCESS_GENERATE_SOUND_AFTER_WAITING = "SUCCESS_GENERATE_SOUND_AFTER_WAITING",
}

export const getSounds = (payload: number) => {
  return {
    type: SoundActions.GET_SOUNDS,
    payload,
  };
};

export const generateSound = (payload: GenerateBody) => {
  return {
    type: SoundActions.GENERATE_SOUND,
    payload,
  };
};

//Request

export interface GetSounds {
  type: SoundActions.GET_SOUNDS;
  payload: number;
}

export interface GenerateSound {
  type: SoundActions.GENERATE_SOUND;
  payload: GenerateBody;
}

//ResponseSuccess

export interface GetSoundsSuccess {
  type: SoundActions.SUCCESS_GET_SOUNDS;
  payload: Sounds;
}

export interface GenerateSoundSuccessLoading {
  type: SoundActions.SUCCESS_GENERATE_SOUND_LOADING;
  payload: GenerateBody;
}

export interface GenerateSoundSuccessAfterWaiting {
  type: SoundActions.SUCCESS_GENERATE_SOUND_AFTER_WAITING;
}


export type GenerateSoundSuccess = GenerateSoundSuccessLoading |GenerateSoundSuccessAfterWaiting 