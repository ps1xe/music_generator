import { call, Effect, put, takeEvery } from "redux-saga/effects";
import UsersService from "../../services/user.service";
import { ChangingAvatarResponse, Profile } from "../../types/users.types";
import {
  ChangeNickname,
  ChangePassword,
  ChangingAvatar,
  GetProfile,
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
    yield put(requestUserFailed());
  }
}

function* changePasswordSaga(action: ChangePassword): Generator<Effect, void> {
  try {
    const passwords = action.payload;
    yield call(UsersService.changePassword, passwords);
  } catch (error) {
    yield put(requestUserFailed());
  }
}

function* getProfileSaga(action: GetProfile): Generator<Effect, void, Profile> {
  try {
    const profile = yield call(UsersService.getProfile);
    yield put(requestUserSuccess(UserActions.SUCCESS_GET_PROFILE, profile));
  } catch (error) {
    yield put(requestUserFailed());
  }
}

function* changeNicknameSaga(action: ChangeNickname): Generator<Effect, void> {
  try {
    const nickname = action.payload;
    yield call(UsersService.changeNickname, nickname);
  } catch (error) {
    yield put(requestUserFailed());
  }
}

export function* watcherUserSaga(): Generator<Effect, void> {
  yield takeEvery(UserActions.CHANGING_AVATAR, changingAvatarSaga);
  yield takeEvery(UserActions.CHANGE_PASSWORD, changePasswordSaga);
  yield takeEvery(UserActions.GET_PROFILE, getProfileSaga);
  yield takeEvery(UserActions.CHANGE_NICKNAME, changeNicknameSaga);
}
