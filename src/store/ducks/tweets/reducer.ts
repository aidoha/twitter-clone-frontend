import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './actionCreators';
import { TweetsState, LoadingState } from './contracts/state';

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    const { type, payload } = action;

    switch (type) {
      case TweetsActionsType.SET_TWEETS:
        draft.items = payload;
        break;
      default:
        break;
    }
  },
  initialTweetsState
);
