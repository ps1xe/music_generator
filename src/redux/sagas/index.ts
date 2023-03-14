import { all, Effect } from "redux-saga/effects";
import { watcherAuthSaga } from "./auth.saga";
import { watcherSoundsSaga } from "./sounds.saga";
import { watcherUserSaga } from "./users.saga";

export default function* rootSaga(): Generator<Effect, void> {
  yield all([watcherAuthSaga(), watcherSoundsSaga(), watcherUserSaga()]);
}
