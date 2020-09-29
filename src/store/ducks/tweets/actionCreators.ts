import { Action } from 'redux';
import { TweetsState } from './contracts/state';

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}
export interface FetchActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export const setTweets = (
  payload: TweetsState['items']
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchTweets = (): FetchActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions = SetTweetsActionInterface;
