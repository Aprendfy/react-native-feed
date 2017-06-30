import { SAVE_FEED } from '../../../../src/modules/feed/actions/types';
import { fetchFeed, fetchMoreFeed, saveFeed } from '../../../../src/modules/feed/actions';

describe('Feed actions', () => {
  it('Should save a feed', () => {
    const feed = { payload: 'Nao faco ideia de como é esse objeto' };
    const expectedAction = {
      type: SAVE_FEED,
      payload: feed
    };

    expect(saveFeed(feed)).toEqual(expectedAction);
  });

  it.skip('Should fetch feed', () => {
    expect(fetchFeed('SOMETHING')).toEqual({});
  });

  it.skip('Should fetch more feeds', () => {
    expect(fetchMoreFeed('SOMETHING')).toEqual({});
  });
});
