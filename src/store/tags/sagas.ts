import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../services/api/tweetsApi';
import {
  setTags,
  setTweetsLoadingState,
  TagsActionsType,
} from './actionCreators';
import { LoadingState } from './contracts/state';

export function* fetchTagsRequest() {
  try {
    const data = yield call(TweetsApi.fetchTags);
    yield put(setTags(data));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
