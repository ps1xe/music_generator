import {} from "../../types/users.types";
import { RequestUserFailed, UserActions } from "../actions/users.actions";

const initialState = true;

export const requestUserFailedReducer = (
  state: boolean = initialState,
  action: RequestUserFailed
) => {
  if (action.type === UserActions.REQUEST_USER_FAILED) {
    return false;
  }
  return state;
};
