import { combineReducers } from 'redux';
import { NavigationReducer as navigation } from '@expo/ex-navigation';

import feed from '../modules/feed/reducers/index';
import navigator from '../modules/navigator/reducers/index';
import categories from '../modules/category/reducers/index';

export default combineReducers({
  feed,
  navigator,
  categories,
  navigation
});
