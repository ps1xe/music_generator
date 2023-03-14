import { ChangingAvatarResponse } from "../../types/users.types.js";
import { ChangingAvatarSuccess } from "../actions/users.actions.js";

export const initialState = {
  url: "",
} as ChangingAvatarResponse;

export const changingAvatarReducer = (
  state: ChangingAvatarResponse = initialState,
  action: ChangingAvatarSuccess
) => {
  if (action.payload) {
    return action.payload;
  }
  return state;
};
