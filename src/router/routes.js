import { createRouter } from '@expo/ex-navigation';
import Feed from '../modules/feed/components/FeedScreen';
import Categories from '../modules/categories/components/CategoriesScreen';

export const Router = createRouter(() => ({
  feed: () => Feed,
  categories: () => Categories
}), { ignoreSerializableWarnings: true });

export default Router;
