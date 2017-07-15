import FetchMock from 'fetch-mock';
import { getAllCategories, getFeedsByCategory } from '../../src/services/aprendfy';
import CATEGORIES_FIXTURE from '../assets/fixtures/getCategoriesResponse.json';
import POST_FIXTURE from '../assets/fixtures/getPostsResponse.json';

describe('Aprendfy backend service', () => {
  it('Should retrieve all categories', async () => {
    FetchMock.get('https://aprendfy.herokuapp.com/v1/app/categories', CATEGORIES_FIXTURE);

    const categories = await getAllCategories();

    expect(categories).toHaveLength(6);
    categories.forEach(category => expect(Object.keys(category)).toEqual(['title', 'color']));
  });

  it.only('Should retrieve all posts by category', async () => {
    const desiredCategory = 'facebook';
    FetchMock.get(`https://aprendfy.herokuapp.com/v1/app/posts/?category=${desiredCategory}`, POST_FIXTURE);

    const posts = await getFeedsByCategory(desiredCategory);

    // const expectedResponseShape = {
    //   facebook: [ {title: '', category: '', readingTime: '', level: '', body: '', image: '', author: {name: ''}} ];
    // }

    console.log(posts);


    expect(posts).toHaveProperty(desiredCategory);
    expect(posts[desiredCategory]).toHaveLength(2);
  });
});
