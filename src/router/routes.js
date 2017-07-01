import { createRouter } from '@expo/ex-navigation';
import Feed from '../modules/feed/containers/FeedScreen';
import Categories from '../modules/category/containers/CategoriesScreen';

export const Router = createRouter(() => ({
  feed: () => Feed,
  categories: () => Categories
}), { ignoreSerializableWarnings: true });

export default Router;
