import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState, TweetsState } from './contracts/state';

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState => {
  return selectTweets(state).loadingState;
};

export const selectIsTweetsLoading = (state: RootState): boolean => {
  return selectLoadingState(state) === LoadingState.LOADING;
};

export const selectIsTweetsLoaded = (state: RootState): boolean => {
  return selectLoadingState(state) === LoadingState.LOADED;
};

export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items
);
