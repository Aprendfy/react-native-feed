import { saveFeed } from '../../../../src/modules/feed/actions';
import Reducer, { initialState } from '../../../../src/modules/feed/reducers';

describe('Feed reducers', () => {

  it('Should have an empty feed array as initial state', () => {
    const expectedInitialState = { feedList: [] };
    expect(Reducer(initialState, {})).toEqual(expectedInitialState);
  });

  it('Should save a feed', () => {
    const feed = { feed: 'I_HAVE_NO_IDEA' };
    const saveFeedAction = saveFeed(feed);
    const expectedState = { ...initialState, feedList: feed };

    expect(Reducer(initialState, saveFeedAction)).toEqual(expectedState);
  });
});
