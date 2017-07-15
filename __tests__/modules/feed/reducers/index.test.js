import { getFacebookPostsStub, getOrkutPostsStub } from '../../../assets/stubs/aprendfyStub';
import { UPDATE_CATEGORY_POSTS } from '../../../../src/modules/feed/actions/types';
import Reducer, { initialState } from '../../../../src/modules/feed/reducers';

describe('Feed reducers', () => {

  const saveFacebookCategoryAction = {
    type: UPDATE_CATEGORY_POSTS,
    payload: getFacebookPostsStub
  };

  it('Should have an empty object as initial state', () => {
    const expectedInitialState = { posts: {} };
    expect(Reducer(initialState, {})).toEqual(expectedInitialState);
  });

  it('Should update posts from a category', () => {
    const expectedState = { posts: saveFacebookCategoryAction.payload };
    const state = Reducer(initialState, saveFacebookCategoryAction);

    expect(state).toEqual(expectedState);
  });

  it('Should update posts from a category, without breaking others categories', () => {
    const saveOrkutCategoryAction = {
      type: UPDATE_CATEGORY_POSTS,
      payload: getOrkutPostsStub
    };

    const expectedState = {
      posts: {
        facebook: getFacebookPostsStub.facebook,
        orkut: getOrkutPostsStub.orkut
      }
    };

    const stateAfterFacebookUpdate = Reducer(initialState, saveFacebookCategoryAction);
    const stateAfterOrkutUpdate = Reducer(stateAfterFacebookUpdate, saveOrkutCategoryAction);

    expect(stateAfterOrkutUpdate).toEqual(expectedState);
  });
});
