import { all, Effect } from "redux-saga/effects.js";
import { watcherAuthSaga } from "./auth.saga.js";
import { watcherSoundsSaga } from "./sounds.saga.js";

export default function* rootSaga(): Generator<Effect, void> {
  yield all([watcherAuthSaga(), watcherSoundsSaga()]);
}
