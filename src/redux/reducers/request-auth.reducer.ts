import {} from "../../types/users.types";
import { AuthActions, RequestAuthFailed } from "../actions/auth.actions";

const initialState = "";

export const authResponseReducer = (
  state: string = initialState,
  action: RequestAuthFailed
) => {
  if (action.type === AuthActions.REQUEST_AUTH_FAILED) {
    return action.payload;
  } else if (action.type === AuthActions.ZEROING_ERROR) {
    return "";
  }
  return state;
};
