import { createSelector } from 'reselect';
import { RootState } from '../store';
import { LoadingState, TagsState } from './contracts/state';

export const selectTags = (state: RootState): TagsState => state.tags;

export const selectLoadingState = (state: RootState): LoadingState => {
  return selectTags(state).loadingState;
};

export const selectIsTagsLoading = (state: RootState): boolean => {
  return selectLoadingState(state) === LoadingState.LOADING;
};

export const selectIsTagsLoaded = (state: RootState): boolean => {
  return selectLoadingState(state) === LoadingState.LOADED;
};

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
