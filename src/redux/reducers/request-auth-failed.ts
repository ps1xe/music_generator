import {} from "../../types/users.types";
import { AuthActions, RequestAuthFailed } from "../actions/auth.actions";

const initialState = "";

export const authFailedReducer = (
  state: string = initialState,
  action: RequestAuthFailed
) => {
  if (action.type === AuthActions.REQUEST_AUTH_FAILED) {
    if (action.payload) {
      return action.payload;
    }
  } else if (action.type === AuthActions.ZEROING_ERROR) {
    return "";
  }
  return state;
};
