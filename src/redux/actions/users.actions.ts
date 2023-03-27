import { Profile } from "../../types/auth.types";
import {
  ChangeNicknameBody,
  ChangePasswordBody,
  ChangingAvatarResponse,
} from "../../types/users.types";

export const requestUserSuccess = (type: UserActions, payload?: any) => ({
  type,
  payload,
});

export enum UserActions {
  CHANGING_AVATAR = "CHANGING_AVATAR",
  CHANGE_PASSWORD = "CHANGE_PASSWORD",
  SUCCESS_CHANGING_AVATAR = "SUCCESS_CHANGING_AVATAR",
  SUCCESS_CHANGE_PASSWORD = "SUCCESS_CHANGE_PASSWORD",
  GET_PROFILE = "GET_PROFILE",
  SUCCESS_GET_PROFILE = "SUCCESS_GET_PROFILE",
  CHANGE_NICKNAME = "CHANGE_NICKNAME",
  REQUEST_CHANGE_PASSWORD_FAILED = "REQUEST_CHANGE_PASSWORD_FAILED",
  ZEROING_ERROR = "ZEROING ERROR",
  REQUEST_USER_FAILED = "REQUEST_USER_FAILED",
}

export const requestUserFailed = () => ({
  type: UserActions.REQUEST_USER_FAILED,
});

export const changeNickname = (payload: ChangeNicknameBody) => {
  return {
    type: UserActions.CHANGE_NICKNAME,
    payload,
  };
};

export const requestChangePassword = (payload: string) => {
  return {
    type: UserActions.REQUEST_CHANGE_PASSWORD_FAILED,
    payload,
  };
};

export const changingAvatar = (payload: FormData) => {
  return {
    type: UserActions.CHANGING_AVATAR,
    payload,
  };
};

export const getProfile = () => {
  return {
    type: UserActions.GET_PROFILE,
  };
};

export const changePassword = (payload: ChangePasswordBody) => {
  return {
    type: UserActions.CHANGE_PASSWORD,
    payload,
  };
};

export const zeroingError = () => {
  return {
    type: UserActions.ZEROING_ERROR,
  };
};

//Request

export interface GetProfile {
  type: UserActions.GET_PROFILE;
}

export interface ChangingAvatar {
  type: UserActions.CHANGING_AVATAR;
  payload: FormData;
}

export interface ChangePassword {
  type: UserActions.CHANGE_PASSWORD;
  payload: ChangePasswordBody;
}

export interface ChangeNickname {
  type: UserActions.CHANGE_NICKNAME;
  payload: ChangeNicknameBody;
}

export interface RequestChangePasswordFailed {
  type: UserActions.REQUEST_CHANGE_PASSWORD_FAILED;
  payload: string;
}

export interface RequestUserFailed {
  type: UserActions.REQUEST_USER_FAILED;
}

//ResponseSuccess

export interface ChangingAvatarSuccess {
  type: UserActions.SUCCESS_CHANGING_AVATAR;
  payload: ChangingAvatarResponse;
}

export interface ChangePasswordSuccess {
  type: UserActions.SUCCESS_CHANGE_PASSWORD;
}

export interface GetProfileSuccess {
  type: UserActions.SUCCESS_GET_PROFILE;
  payload: Profile;
}
