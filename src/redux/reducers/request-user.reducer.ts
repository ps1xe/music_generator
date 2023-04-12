import {} from "../../types/users.types";
import { ResponseUser, UserActions } from "../actions/users.actions";

const initialState = "";

export const responseUserReducer = (
  state: string = initialState,
  action: ResponseUser
) => {
  if (action.type === UserActions.RESPONSE_USER) {
    return action.payload;
  }
  return state;
};
