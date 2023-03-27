import { GenerateBody } from "../../types/sound.types";
import { GenerateSoundSuccess, SoundActions } from "../actions/sound.actions";

const initialState = [] as [GenerateBody] | [];

export const generateSoundReducer = (
  state: [GenerateBody] | [] = initialState,
  action: GenerateSoundSuccess
) => {
  if (action.type === SoundActions.SUCCESS_GENERATE_SOUND_LOADING) {
    console.log([...state, action.payload]);
    return [...state, action.payload];
  } else if (
    action.type === SoundActions.SUCCESS_GENERATE_SOUND_AFTER_WAITING
  ) {
    const newState = state.slice(0, -1);
    return newState;
  }
  return state;
};
