import FetchMock from 'fetch-mock';
import { getAllCategories } from '../../src/services/aprendfy';
import CATEGORIES_FIXTURE from '../assets/fixtures/getCategoriesResponse.json';

describe('Aprendfy backend service', () => {
  it('Should retrieve all categories', async () => {
    FetchMock.get('https://aprendfy.herokuapp.com/v1/app/categories', CATEGORIES_FIXTURE);

    const categories = await getAllCategories();

    expect(categories).toHaveLength(6);
    categories.forEach(category => expect(Object.keys(category)).toEqual(['title', 'color']));
  });
});
