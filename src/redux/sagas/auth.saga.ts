import { call, Effect, put, takeEvery } from "redux-saga/effects";
import AuthService from "../../services/auth.service";
import { Profile } from "../../types/auth.types";
import {
  AuthActions,
  GetLinkToResetPassword,
  Login,
  Registration,
  requestAuth,
  requestVerificationSuccess,
  ResetPassword,
  Unlogin,
  UpdateTokens,
  VerificationRecoveryToken,
} from "../actions/auth.actions";

function* loginSaga(action: Login): Generator<Effect, void, Profile> {
  try {
    const loginBody = action.payload;
    yield call(AuthService.login, loginBody);
    yield put(requestAuth("Complete"));
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestAuth(errorMassage));
  }
}

function* registrationSaga(
  action: Registration
): Generator<Effect, void, Profile> {
  try {
    const registrationBody = action.payload;
    yield call(AuthService.registration, registrationBody);
    yield put(requestAuth("Complete"));
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestAuth(errorMassage));
  }
}

function* updateTokensSaga(
  action: UpdateTokens
): Generator<Effect, void, Profile> {
  try {
    yield call(AuthService.updateTokens);
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestAuth(errorMassage));
  }
}

function* getLinkToResetPasswordSaga(
  action: GetLinkToResetPassword
): Generator<Effect, void> {
  try {
    const requestBody = action.payload;
    yield call(AuthService.getLinkToResetPassword, requestBody);
    yield put(requestAuth("Complete"));
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestAuth(errorMassage));
  }
}

function* resetPasswordSaga(action: ResetPassword): Generator<Effect, void> {
  try {
    const requestBody = action.payload;
    yield call(AuthService.resetPassword, requestBody);
    yield put(requestAuth("Complete-reset-password"));
  } catch (error: any) {
    const errorMassage = error.response.data.message;
    yield put(requestAuth(errorMassage));
  }
}

function* verificationRecoveryTokenSaga(
  action: VerificationRecoveryToken
): Generator<Effect, void, boolean> {
  try {
    const token = action.payload;
    const isValid = yield call(AuthService.verificationRecoveryToken, token);
    yield put(requestVerificationSuccess(isValid));
  } catch (error: any) {
    yield put(requestAuth());
  }
}

function* unloginSaga(action: Unlogin): Generator<Effect, void, boolean> {
  try {
    yield call(AuthService.unlogin);
  } catch (error: any) {
    yield put(requestAuth());
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
  yield takeEvery(AuthActions.RESET_PASSWORD, resetPasswordSaga);
  yield takeEvery(
    AuthActions.VERIFICATION_RECOVERY_TOKEN,
    verificationRecoveryTokenSaga
  );
  yield takeEvery(AuthActions.UNLOGIN, unloginSaga);
}
