import { combineReducers } from "redux";
import { requestChangePasswordFailedReducer } from "./changing-avatar.reducer";
import { generateSoundReducer } from "./generate-sound.reducer";
import { getProfileReducer } from "./get-profile.reducer";
import { getSoundsReducer } from "./get-sounds.reducer";
import { authFailedReducer } from "./request-auth-failed.reducer";
import { requestUserFailedReducer } from "./request-user-failed.reducer";

export const rootReducer = combineReducers({
  sounds: getSoundsReducer,
  passwordChange: requestChangePasswordFailedReducer,
  profile: getProfileReducer,
  authError: authFailedReducer,
  isAuthenticated: requestUserFailedReducer,
  listGeneratedNow : generateSoundReducer
});
