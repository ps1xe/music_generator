import { ProfileState } from "../../types/users.types";
import {
  GetProfileSuccess,
  UserActions,
} from "../actions/users.actions";

const initialState = {
  email: "",
  username: "",
  avatar: "",
} as ProfileState;

export const getProfileReducer = (
  state: ProfileState = initialState,
  action: GetProfileSuccess
) => {
  if (action.type === UserActions.SUCCESS_GET_PROFILE) {
    if (action.payload) {
      return action.payload;
    }
  }
  return state;
};
