import { Tweet } from './contracts/state';

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
}

export interface SetTweetsActionInterface {
  type: TweetsActionsType.SET_TWEETS;
  payload: Tweet[];
}
