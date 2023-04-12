import { combineReducers } from "redux";
import { requestChangePasswordFailedReducer } from "./request-change-password-failed.reducer";
import { loadingSoundReducer } from "./loading-sound.reducer";
import { getProfileReducer } from "./get-profile.reducer";
import { getSoundsReducer } from "./get-sounds.reducer";
import { authResponseReducer } from "./request-auth.reducer";
import { responseUserReducer } from "./request-user.reducer";
import { verificationRecoveryTokenReducer } from "./verification-recovery-token.reducer";
import { changeNicknameReducer } from "./change-nickname-reducer";

export const rootReducer = combineReducers({
  sounds: getSoundsReducer,
  passwordChange: requestChangePasswordFailedReducer,
  profile: getProfileReducer,
  authError: authResponseReducer,
  responseUser: responseUserReducer,
  loadingSound: loadingSoundReducer,
  recoveryTokenValidity: verificationRecoveryTokenReducer,
  changeNicknameSuccess: changeNicknameReducer,
});
