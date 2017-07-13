import { SAVE_CATEGORIES } from '../../../../src/modules/category/actions/types';
import { saveCategories, fetchCategories } from '../../../../src/modules/category/actions';
import { colors } from '../../../../src/modules/theme/styles';
import * as Aprendfy from '../../../../src/services/aprendfy';

jest.mock('../../../../src/services/aprendfy');

describe('Categories actions', () => {

  const serviceResponse = [
    { title: 'Facebook' },
    { title: 'Google+' },
    { title: 'Instagram' },
    { title: 'LinkedIn' },
    { title: 'Pinterest' },
    { title: 'Twitter' }
  ];

  it('Should save a category', () => {
    const newCategory = { title: 'New Category', color: colors.lightBackground };
    const expectedAction = {
      type: SAVE_CATEGORIES,
      payload: newCategory
    };

    expect(saveCategories(newCategory)).toEqual(expectedAction);
  });

  it('Should fetch all categories from aprendfy service', async () => {
    Aprendfy.getAllCategories = jest.fn(() => serviceResponse);

    const expectedAction = {
      type: SAVE_CATEGORIES,
      payload: serviceResponse
    };

    const mockDispatch = jest.fn();
    const thunk = fetchCategories();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });
});
