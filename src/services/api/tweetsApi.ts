import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/state';
import { TagsState } from '../../store/tags/contracts/state';

export const TweetsApi = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios.get('/tweets').then(({ data }) => data);
  },
  fetchTags(): Promise<TagsState['items']> {
    return axios.get('/tags').then(({ data }) => data);
  },
};
