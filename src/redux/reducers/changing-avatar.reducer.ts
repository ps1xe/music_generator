import {
  RequestChangePasswordFailed,
  UserActions,
} from "../actions/users.actions";

const initialState = "";

export const requestChangePasswordFailedReducer = (
  state: string = initialState,
  action: RequestChangePasswordFailed
) => {
  if (action.type === UserActions.REQUEST_CHANGE_PASSWORD_FAILED) {
    return action.payload;
  } else if (action.type === UserActions.ZEROING_ERROR) {
    return "";
  }
  return state;
};
