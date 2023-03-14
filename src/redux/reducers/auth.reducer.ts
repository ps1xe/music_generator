import { AuthState } from "../../types/auth.types";
import { AuthActions, AuthStateTypes } from "../actions/auth.actions";

export const initialState = {
  email: "",
  username: "",
  avatar: "",
} as AuthState;

export const changingAvatarReducer = (
  state: AuthState = initialState,
  action: AuthStateTypes
) => {
  switch (action.type) {
    case AuthActions.SUCCESS_LOGIN:
      return action.payload;
    case AuthActions.SUCCESS_REGISTRATION:
      return action.payload;
    case AuthActions.SUCCESS_UPDATE_TOKENS:
      return action.payload;
    default:
      return state;
  }
};
