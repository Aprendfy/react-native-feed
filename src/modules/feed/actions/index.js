import { SAVE_FEED } from './types';
import { fakeData } from '../../../config/mockData';

export function fetchFeed(category) {
  return async (dispatch) => {
    const items = await fakeData(category);
    dispatch(saveFeed(items));
  };
}

export function saveFeed(payload) {
  return {
    type: SAVE_FEED,
    payload
  };
}
