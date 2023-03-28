import { GenerateSoundSuccess, SoundActions } from "../actions/sound.actions";

const initialState = "";

export const loadingSoundReducer = (
  state: string = initialState,
  action: GenerateSoundSuccess
) => {
  if (action.type === SoundActions.SUCCESS_GENERATE_SOUND_LOADING) {
    return "Waiting";
  } else if (
    action.type === SoundActions.SUCCESS_GENERATE_SOUND_AFTER_WAITING
  ) {
    return "Complete";
  }
  return state;
};
