import { call, Effect, put, takeEvery } from "redux-saga/effects.js";
import UsersService from "../../services/user.service.js";
import { ChangingAvatarResponse } from "../../types/users.types.js";
import { requestSoundFailed } from "../actions/sound.actions.js";
import {
  ChangePassword,
  ChangingAvatar,
  requestUserSuccess,
  UserActions,
} from "../actions/users.actions.js";

function* changingAvatarSaga(
  action: ChangingAvatar
): Generator<Effect, void, ChangingAvatarResponse> {
  try {
    const formData = action.payload;
    const avatar = yield call(UsersService.changingAvatar, formData);
    yield put(requestUserSuccess(UserActions.SUCCESS_CHANGING_AVATAR, avatar));
  } catch (exception) {
    yield put(requestSoundFailed());
  }
}

function* changePasswordSaga(action: ChangePassword): Generator<Effect, void> {
  try {
    const passwords = action.payload;
    const avatar = yield call(UsersService.changePassword, passwords);
    yield put(requestUserSuccess(UserActions.CHANGE_PASSWORD, avatar));
  } catch (exception) {
    yield put(requestSoundFailed());
  }
}

export function* watcherUserSaga(): Generator<Effect, void> {
  yield takeEvery(UserActions.CHANGING_AVATAR, changingAvatarSaga);
  yield takeEvery(UserActions.CHANGE_PASSWORD, changePasswordSaga);
}
