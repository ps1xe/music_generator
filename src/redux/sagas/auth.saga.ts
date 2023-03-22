import { call, Effect, put, takeEvery } from "redux-saga/effects";
import AuthService from "../../services/auth.service";
import { Profile } from "../../types/auth.types";
import {
  AuthActions,
  GetLinkToResetPassword,
  Login,
  Registration,
  requestAuthFailed,
  requestAuthSuccess,
  UpdateTokens,
} from "../actions/auth.actions";

function* loginSaga(action: Login): Generator<Effect, void, Profile> {
  try {
    const loginBody = action.payload;
    yield call(AuthService.login, loginBody);
  } catch (exception) {
    yield put(requestAuthFailed());
  }
}

function* registrationSaga(
  action: Registration
): Generator<Effect, void, Profile> {
  try {
    const registrationBody = action.payload;
    yield call(AuthService.registration, registrationBody);
  } catch (exception) {
    yield put(requestAuthFailed());
  }
}

function* updateTokensSaga(
  action: UpdateTokens
): Generator<Effect, void, Profile> {
  try {
    yield call(AuthService.updateTokens);
  } catch (exception) {
    yield put(requestAuthFailed());
  }
}

function* getLinkToResetPasswordSaga(
  action: GetLinkToResetPassword
): Generator<Effect, void> {
  try {
    const requestBody = action.payload;
    const userInfo = yield call(
      AuthService.getLinkToResetPassword,
      requestBody
    );
    yield put(
      requestAuthSuccess(
        AuthActions.SUCCESS_GET_LINK_TO_RESET_PASSWORD,
        userInfo
      )
    );
  } catch (exception) {
    yield put(requestAuthFailed());
  }
}

export function* watcherAuthSaga(): Generator<Effect, void> {
  yield takeEvery(AuthActions.LOGIN, loginSaga);
  yield takeEvery(AuthActions.REGISTRATION, registrationSaga);
  yield takeEvery(AuthActions.UPDATE_TOKENS, updateTokensSaga);
  yield takeEvery(
    AuthActions.GET_LINK_TO_RESET_PASSWORD,
    getLinkToResetPasswordSaga
  );
}
