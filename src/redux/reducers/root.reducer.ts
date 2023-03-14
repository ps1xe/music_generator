import { combineReducers } from "redux";
import { changingAvatarReducer } from "./changing-avatar.reducer";
import { getSoundsReducer } from "./get-sounds.reducer";

export const rootReducer = combineReducers({
  sounds: getSoundsReducer,
  avatar: changingAvatarReducer,
  userInfo: changingAvatarReducer,
});
