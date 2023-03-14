import { combineReducers } from "redux";
import { generateSoundReducer } from "./generate-sound.reducer.js";
import { getSoundsReducer } from "./get-sounds.reducer.js";

export const rootReducer = combineReducers({
  getSoundsReducer,
  generateSoundReducer,
});
