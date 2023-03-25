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

export const requestUserFailed = () => ({
  type: "REQUEST_USER_FAILED",
});

export enum UserActions {
  CHANGING_AVATAR = "CHANGING_AVATAR",
  CHANGE_PASSWORD = "CHANGE_PASSWORD",
  SUCCESS_CHANGING_AVATAR = "SUCCESS_CHANGING_AVATAR",
  SUCCESS_CHANGE_PASSWORD = "SUCCESS_CHANGE_PASSWORD",
  GET_PROFILE = "GET_PROFILE",
  SUCCESS_GET_PROFILE = "SUCCESS_GET_PROFILE",
  CHANGE_NICKNAME = "CHANGE_NICKNAME",
}

export const changeNickname = (payload: ChangeNicknameBody) => {
  return {
    type: UserActions.CHANGE_NICKNAME,
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
