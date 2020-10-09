import { Action } from 'redux';
import { LoadingState, TagsState } from './contracts/state';

export enum TagsActionsType {
  SET_TAGS = 'tags/SET_TAGS',
  FETCH_TAGS = 'tags/FETCH_TAGS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_TAGS;
  payload: TagsState['items'];
}
export interface FetchActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_TAGS;
}
export interface SetTagsLoadingStateActionInterface
  extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTags = (
  payload: TagsState['items']
): SetTagsActionInterface => ({
  type: TagsActionsType.SET_TAGS,
  payload,
});

export const fetchTags = (): FetchActionInterface => ({
  type: TagsActionsType.FETCH_TAGS,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTagsLoadingStateActionInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
});

export type TagsActions =
  | SetTagsActionInterface
  | FetchActionInterface
  | SetTagsLoadingStateActionInterface;
