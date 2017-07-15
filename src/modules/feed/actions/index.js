import { UPDATE_CATEGORY_POSTS } from './types';
import { getFeedsByCategory } from '../../../services/aprendfy';

export function fetchFeedByCategory(category) {
  return async (dispatch) => {
    const feeds = await getFeedsByCategory(category);

    const action = {
      type: UPDATE_CATEGORY_POSTS,
      payload: feeds
    };

    dispatch(action);
  };
}
