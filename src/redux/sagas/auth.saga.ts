import { call, Effect, put, takeEvery } from "redux-saga/effects.js";
import AuthService from "../../services/auth.service.js";
import { AuthenticationResponse } from "../../types/auth.types.js";
import {
  AuthActions,
  GetLinkToResetPassword,
  Login,
  Registration,
  requestAuthFailed,
  requestAuthSuccess,
  UpdateTokens,
} from "../actions/auth.actions.js";

function* loginSaga(
  action: Login
): Generator<Effect, void, AuthenticationResponse> {
  try {
    const loginBody = action.payload;
    const userInfo = yield call(AuthService.login, loginBody);
    yield put(requestAuthSuccess(AuthActions.SUCCESS_LOGIN, userInfo));
  } catch (exception) {
    yield put(requestAuthFailed());
  }
}

function* registrationSaga(
  action: Registration
): Generator<Effect, void, AuthenticationResponse> {
  try {
    const registrationBody = action.payload;
    const userInfo = yield call(AuthService.registration, registrationBody);
    yield put(requestAuthSuccess(AuthActions.SUCCESS_REGISTRATION, userInfo));
  } catch (exception) {
    yield put(requestAuthFailed());
  }
}

function* updateTokensSaga(
  action: UpdateTokens
): Generator<Effect, void, AuthenticationResponse> {
  try {
    const userInfo = yield call(AuthService.updateTokens);
    yield put(requestAuthSuccess(AuthActions.SUCCESS_UPDATE_TOKENS, userInfo));
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
