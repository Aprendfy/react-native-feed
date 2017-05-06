import * as types from '../actions/types';
import * as feed from './reducers';

const initialState = {
  feedList: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_FEED:
      return feed.saveFeed(state, action);
    default:
      return state;
  }
}
