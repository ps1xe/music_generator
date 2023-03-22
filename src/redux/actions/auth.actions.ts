import {
  GetLinkToResetPasswordBody,
  LoginBody,
  RegistrationBody,
} from "../../types/auth.types";

export const requestAuthSuccess = (type: AuthActions, payload?: any) => ({
  type,
  payload,
});

export const requestAuthFailed = () => ({
  type: "REQUEST_AUTH_FAILED",
});

export enum AuthActions {
  LOGIN = "LOGIN",
  REGISTRATION = "REGISTRATION",
  UPDATE_TOKENS = "UPDATE_TOKENS",
  GET_LINK_TO_RESET_PASSWORD = "GET_LINK_TO_RESET_PASSWORD",
  SUCCESS_GET_LINK_TO_RESET_PASSWORD = "SUCCESS_GET_LINK_TO_RESET_PASSWORD",
}

export const login = (payload: LoginBody) => {
  return {
    type: AuthActions.LOGIN,
    payload,
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

//ResponseSuccess

export interface GetLinkToResetPasswordSuccess {
  type: AuthActions.SUCCESS_GET_LINK_TO_RESET_PASSWORD;
  payload: object;
}
