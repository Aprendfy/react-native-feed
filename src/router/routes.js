import { createRouter } from '@expo/ex-navigation';
import FeedScreen from '../modules/feed/components/FeedScreen';
import CategoriesScreen from '../modules/categories/components/CategoriesScreen';

export const Router = createRouter(() => ({
  feed: () => FeedScreen,
  categories: () => CategoriesScreen
}), { ignoreSerializableWarnings: true });

export default Router;
