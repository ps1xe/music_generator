import { call, Effect, put, takeEvery } from "redux-saga/effects";
import AuthService from "../../services/auth.service";
import { Profile } from "../../types/auth.types";
import {
  AuthActions,
  GetLinkToResetPassword,
  Login,
  Registration,
  requestAuthFailed,
  UpdateTokens,
} from "../actions/auth.actions";

function* loginSaga(action: Login): Generator<Effect, void, Profile> {
  try {
    const loginBody = action.payload;
    yield call(AuthService.login, loginBody);
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestAuthFailed(errorMassage));
  }
}

function* registrationSaga(
  action: Registration
): Generator<Effect, void, Profile> {
  try {
    const registrationBody = action.payload;
    yield call(AuthService.registration, registrationBody);
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestAuthFailed(errorMassage));
  }
}

function* updateTokensSaga(
  action: UpdateTokens
): Generator<Effect, void, Profile> {
  try {
    yield call(AuthService.updateTokens);
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestAuthFailed(errorMassage));
  }
}

function* getLinkToResetPasswordSaga(
  action: GetLinkToResetPassword
): Generator<Effect, void> {
  try {
    const requestBody = action.payload;
    yield call(AuthService.getLinkToResetPassword, requestBody);
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestAuthFailed(errorMassage));
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
