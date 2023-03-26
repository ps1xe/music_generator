import {
  GetLinkToResetPasswordBody,
  LoginBody,
  RegistrationBody,
} from "../../types/auth.types";

export const requestAuthSuccess = (type: AuthActions, payload?: any) => ({
  type,
  payload,
});

export enum AuthActions {
  LOGIN = "LOGIN",
  REGISTRATION = "REGISTRATION",
  UPDATE_TOKENS = "UPDATE_TOKENS",
  GET_LINK_TO_RESET_PASSWORD = "GET_LINK_TO_RESET_PASSWORD",
  REQUEST_AUTH_FAILED = "REQUEST_AUTH_FAILED",
  ZEROING_ERROR = "ZEROING ERROR",
}

export const requestAuthFailed = (payload: string) => ({
  type: AuthActions.REQUEST_AUTH_FAILED,
  payload,
});

export const login = (payload: LoginBody) => {
  return {
    type: AuthActions.LOGIN,
    payload,
  };
};

export const zeroingError = () => {
  return {
    type: AuthActions.ZEROING_ERROR,
  };
};

export const registration = (payload: RegistrationBody) => {
  return {
    type: AuthActions.REGISTRATION,
    payload,
  };
};

export const updateTokens = () => {
  return {
    type: AuthActions.UPDATE_TOKENS,
  };
};

export const getLinkToResetPassword = (payload: GetLinkToResetPasswordBody) => {
  return {
    type: AuthActions.GET_LINK_TO_RESET_PASSWORD,
    payload,
  };
};

//Request

export interface Login {
  type: AuthActions.LOGIN;
  payload: LoginBody;
}

export interface RequestAuthFailed {
  type: AuthActions.REQUEST_AUTH_FAILED;
  payload: string;
}

export interface Registration {
  type: AuthActions.REGISTRATION;
  payload: RegistrationBody;
}

export interface UpdateTokens {
  type: AuthActions.UPDATE_TOKENS;
}

export interface GetLinkToResetPassword {
  type: AuthActions.GET_LINK_TO_RESET_PASSWORD;
  payload: GetLinkToResetPasswordBody;
}
