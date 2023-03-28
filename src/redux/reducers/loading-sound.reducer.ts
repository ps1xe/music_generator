import { GenerateSoundSuccess, SoundActions } from "../actions/sound.actions";

const initialState = 0;

export const loadingSoundReducer = (
  state: number = initialState,
  action: GenerateSoundSuccess
) => {
  if (action.type === SoundActions.SUCCESS_GENERATE_SOUND_LOADING) {
    const random = Math.random();
    return random;
  }
  return state;
};
