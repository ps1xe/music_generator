import { combineReducers } from "redux";
import { changingAvatarReducer } from "./changing-avatar.reducer";
import { getProfileReducer } from "./get-profile.reducer";
import { getSoundsReducer } from "./get-sounds.reducer";
import { authFailedReducer } from "./request-auth-failed";

export const rootReducer = combineReducers({
  sounds: getSoundsReducer,
  avatar: changingAvatarReducer,
  profile: getProfileReducer,
  authError: authFailedReducer,
});
