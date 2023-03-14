import { Sounds } from "../../types/sound.types.js";
import { GetSoundsSuccess } from "../actions/sound.actions.js";

export const initialState = {
  soundsInfo: [],
  sounds: [],
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
  if (action.payload) {
    return action.payload;
  }
  return state;
};
