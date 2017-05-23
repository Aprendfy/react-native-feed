import { SAVE_FEED } from './types';
import { fakeData } from '../../../config/mockData';

export function fetchFeed() {
  return async (dispatch) => {
    const items = await fakeData();
    dispatch(saveFeed(items));
  };
}

export function fetchMoreFeed(feed) {
  return async (dispatch) => {
    const items = await fakeData();
    await items.forEach((item) => {
      feed.push(item);
    });
    dispatch(saveFeed(feed));
  };
}


export function saveFeed(payload) {
  return {
    type: SAVE_FEED,
    payload
  };
}

