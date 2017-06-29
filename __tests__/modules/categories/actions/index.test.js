import { SAVE_CATEGORIES } from '../../../../src/modules/categories/actions/types';
import { saveCategories, fetchCategories } from '../../../../src/modules/categories/actions';

import { colors } from '../../../../src/assets/styles/styles';

describe('Categories actions', () => {
  const categoriesArray = [
    { title: 'Facebook', color: colors.categorieFacebook },
    { title: 'Google+', color: colors.categorieGooglePlus },
    { title: 'Instagram', color: colors.categorieInstagram },
    { title: 'LinkedIn', color: colors.categorieLinkedin },
    { title: 'Pinterest', color: colors.categoriePinterest },
    { title: 'Twitter', color: colors.categorieTwitter }
  ];

  it('Should save a category', () => {
    const newCategory = { title: 'New Category', color: colors.lightBackground };
    const expectedAction = {
      type: SAVE_CATEGORIES,
      payload: newCategory
    };

    expect(saveCategories(newCategory)).toEqual(expectedAction);
  });

  it('Should fetch all categories', () => {
    const expectedAction = {
      type: SAVE_CATEGORIES,
      payload: categoriesArray
    };

    expect(fetchCategories()).toEqual(expectedAction);
  });
});
