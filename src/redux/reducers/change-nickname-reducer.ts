import {
  ChangeNicknameSuccess,
  UserActions,
} from "../actions/users.actions";

const initialState = "";

export const changeNicknameReducer = (
  state: string = initialState,
  action: ChangeNicknameSuccess
) => {
  if (action.type === UserActions.SUCCESS_CHANGE_NICKNAME) {
    return action.payload;
  }
  return state;
};
