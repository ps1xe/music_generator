import {} from "../../types/users.types";
import {
  AuthActions,
  VerificationRecoveryTokenSuccess,
} from "../actions/auth.actions";

const initialState = true;

export const verificationRecoveryTokenReducer = (
  state: boolean = initialState,
  action: VerificationRecoveryTokenSuccess
) => {
  if (action.type === AuthActions.SUCCESS_VERIFICATION_RECOVERY_TOKEN) {
    return action.payload;
  }
  return state;
};
