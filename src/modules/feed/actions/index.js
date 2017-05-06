import { SAVE_FEED } from './types';

export function fetchFeed() {
    return saveFeed(['Item 1','Item 2','Item 3','Item 4','Item 5']);
}

export function saveRoles(payload) {
  return {
    type: SAVE_FEED,
    payload
  };
}
