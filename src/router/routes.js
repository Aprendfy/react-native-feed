import { createRouter } from '@expo/ex-navigation';
import FeedScreen from '../modules/feed/components/FeedScreen';

export const Router = createRouter(() => ({
  feed: () => FeedScreen
}));

export default {};
