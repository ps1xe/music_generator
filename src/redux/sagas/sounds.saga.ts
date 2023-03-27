import {
  GenerateSound,
  GetSounds,
  requestSoundSuccess,
  requestSoundFailed,
  SoundActions,
} from "../actions/sound.actions";
import { call, Effect, put, takeEvery } from "redux-saga/effects";
import SoundService from "../../services/sound.service";
import { GeneratedSound, Sounds } from "../../types/sound.types";

function* getSoundsSaga(action: GetSounds): Generator<Effect, void, Sounds> {
  try {
    const page = action.payload;
    const sounds = yield call(SoundService.getSounds, page);
    // console.log(sounds)
    yield put(requestSoundSuccess(SoundActions.SUCCESS_GET_SOUNDS, sounds));
  } catch (error) {
    yield put(requestSoundFailed());
  }
}

function* generateSoundSaga(
  action: GenerateSound
): Generator<Effect, void, GeneratedSound> {
  try {
    const generationOptions = action.payload;

    yield put(
      requestSoundSuccess(
        SoundActions.SUCCESS_GENERATE_SOUND_LOADING,
        generationOptions
      )
    );

    yield call(SoundService.generateSounds, generationOptions);
    yield put(
      requestSoundSuccess(SoundActions.SUCCESS_GENERATE_SOUND_AFTER_WAITING)
    );
  } catch (error) {
    yield put(requestSoundFailed());
  }
}

export function* watcherSoundsSaga(): Generator<Effect, void> {
  yield takeEvery(SoundActions.GET_SOUNDS, getSoundsSaga);
  yield takeEvery(SoundActions.GENERATE_SOUND, generateSoundSaga);
}
