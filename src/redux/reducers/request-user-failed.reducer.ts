import {} from "../../types/users.types";
import { RequestUserFailed, UserActions } from "../actions/users.actions";

const initialState = "";

export const requestUserFailedReducer = (
  state: string = initialState,
  action: RequestUserFailed
) => {
  if (action.type === UserActions.REQUEST_USER_FAILED) {
    return action.payload;
  }
  return state;
};
