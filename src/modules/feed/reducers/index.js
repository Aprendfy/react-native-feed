import { UPDATE_CATEGORY_POSTS } from '../actions/types';
import { saveFeed } from './reducers';

export const initialState = {
  posts: {}
};

export default function reducer(feedState = initialState, action) {
  switch (action.type) {
    case UPDATE_CATEGORY_POSTS: return saveFeed(feedState, action);
    default: return feedState;
  }
}
