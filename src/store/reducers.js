import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import feed from '../modules/feed/reducers/index';
import navigator from '../modules/navigator/reducers/index';

export default combineReducers({
  feed,
  navigator,
  navigation: NavigationReducer
});
