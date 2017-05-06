import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import feed from '../modules/feed/reducers/index';

export default combineReducers({
  feed,
  navigation: NavigationReducer
});
