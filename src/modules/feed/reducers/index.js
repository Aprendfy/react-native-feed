import { SAVE_FEED } from '../actions/types';

const initialState = {
  feedList: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_FEED: {
      const feedList = [...state.feedList, ...action.payload];
      return { ...state, feedList };
    }
    default:
      return state;
  }
}
