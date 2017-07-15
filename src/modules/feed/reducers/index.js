import { UPDATE_CATEGORY_POSTS } from '../actions/types';
import * as feed from './reducers';

const initialState = {
  feedList: []
};

export default function reducer(feedState = initialState, action) {
  switch (action.type) {
    case UPDATE_CATEGORY_POSTS: return feed.saveFeed(feedState, action);
    default: return feedState;
  }
}
