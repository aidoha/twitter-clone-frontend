import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import {
  setTweets,
  setTweetsLoadingState,
  TweetsActionsType,
} from './actionCreators';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const data = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(data));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
