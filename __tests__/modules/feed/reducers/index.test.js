import { UPDATE_CATEGORY_POSTS } from '../../../../src/modules/feed/actions/types';
import Reducer, { initialState } from '../../../../src/modules/feed/reducers';

describe('Feed reducers', () => {

  it('Should have an empty feed array as initial state', () => {
    const expectedInitialState = { feedList: [] };
    expect(Reducer(initialState, {})).toEqual(expectedInitialState);
  });

  it('Should save a feed', () => {
    const feed = { feed: 'I_HAVE_NO_IDEA' };

    const saveFeedAction = {
      type: UPDATE_CATEGORY_POSTS,
      payload: feed
    };

    const expectedState = { ...initialState, feedList: feed };

    expect(Reducer(initialState, saveFeedAction)).toEqual(expectedState);
  });
});
