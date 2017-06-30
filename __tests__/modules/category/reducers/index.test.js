
import { saveCategories } from '../../../../src/modules/category/actions';
import Reducer, { initialState } from '../../../../src/modules/category/reducers';

describe('Categories reducers', () => {

  it('Should have an empty categories array as initial state', () => {
    const expectedInitialState = { categories: [] };
    expect(Reducer(initialState, {})).toEqual(expectedInitialState);
  });

  it('Should save a category', () => {
    const category = { title: 'New Category', color: 'Vermeio' };
    const saveCategoryAction = saveCategories(category);
    const expectedState = { ...initialState, categories: category };

    expect(Reducer(initialState, saveCategoryAction)).toEqual(expectedState);
  });
});
