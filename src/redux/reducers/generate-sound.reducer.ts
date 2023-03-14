import { GeneratedSound } from "../../types/sound.types.js";
import { GenerateSoundSuccess } from "../actions/sound.actions.js";

export const initialState = {
  url: "",
} as GeneratedSound;

export const generateSoundReducer = (
  state: GeneratedSound = initialState,
  action: GenerateSoundSuccess
) => {
  if (action.payload) {
    return action.payload;
  }
  return state;
};
