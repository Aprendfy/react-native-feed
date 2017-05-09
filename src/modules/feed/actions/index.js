import { SAVE_FEED } from './types';

export function fetchFeed() {
  let items = []
  for (let i = 0; i < 20; ++i) {
    items.push('Item');
  }
  return saveFeed(items);
}

export function fetchMoreFeed(feed) {
  for (let i = 0; i < 20; ++i) {
    feed.push('Item');
  }
  return saveFeed(feed);
}


export function saveFeed(payload) {
  return {
    type: SAVE_FEED,
    payload
  };
}

