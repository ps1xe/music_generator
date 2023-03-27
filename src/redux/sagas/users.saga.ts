import { call, Effect, put, takeEvery } from "redux-saga/effects";
import UsersService from "../../services/user.service";
import { ChangingAvatarResponse, Profile } from "../../types/users.types";
import {
  ChangeNickname,
  ChangePassword,
  ChangingAvatar,
  GetProfile,
  requestChangePassword,
  requestUserFailed,
  requestUserSuccess,
  UserActions,
} from "../actions/users.actions";

function* changingAvatarSaga(
  action: ChangingAvatar
): Generator<Effect, void, ChangingAvatarResponse> {
  try {
    const formData = action.payload;
    const avatar = yield call(UsersService.changingAvatar, formData);
    yield put(requestUserSuccess(UserActions.SUCCESS_CHANGING_AVATAR, avatar));
  } catch (error) {
    yield put(requestUserFailed('Access error'));
  }
}

function* changePasswordSaga(action: ChangePassword): Generator<Effect, void> {
  try {
    const passwords = action.payload;
    yield call(UsersService.changePassword, passwords);
    yield put(requestChangePassword("Complete"));
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestChangePassword(errorMassage));
  }
}

function* getProfileSaga(action: GetProfile): Generator<Effect, void, Profile> {
  try {
    const profile = yield call(UsersService.getProfile);
    yield put(requestUserFailed('Complete'));
    yield put(requestUserSuccess(UserActions.SUCCESS_GET_PROFILE, profile));  
  } catch (error) {
    yield put(requestUserFailed('Access error'));
  }
}

function* changeNicknameSaga(action: ChangeNickname): Generator<Effect, void> {
  try {
    const nickname = action.payload;
    yield call(UsersService.changeNickname, nickname);
    yield put(requestUserFailed('Complete'));
  } catch (error) {
    yield put(requestUserFailed('Access error'));
  }
}

export function* watcherUserSaga(): Generator<Effect, void> {
  yield takeEvery(UserActions.CHANGING_AVATAR, changingAvatarSaga);
  yield takeEvery(UserActions.CHANGE_PASSWORD, changePasswordSaga);
  yield takeEvery(UserActions.GET_PROFILE, getProfileSaga);
  yield takeEvery(UserActions.CHANGE_NICKNAME, changeNicknameSaga);
}
