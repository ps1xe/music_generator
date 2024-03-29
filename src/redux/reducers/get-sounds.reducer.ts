import { Sounds } from "../../types/sound.types";
import { GetSoundsSuccess, SoundActions } from "../actions/sound.actions";

export const initialState = {
  soundsInfo: [],
  meta: {
    page: 1,
    take: 10,
    itemCount: 1,
    pageCount: 1,
    hasPreviousPage: false,
    hasNextPage: false,
  },
} as Sounds;

export const getSoundsReducer = (
  state: Sounds = initialState,
  action: GetSoundsSuccess
) => {
  if (action.type === SoundActions.SUCCESS_GET_SOUNDS) {
    if (action.payload) {
      return action.payload;
    }
  }
  return state;
};
