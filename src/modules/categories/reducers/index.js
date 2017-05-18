import * as types from '../actions/types';
import * as categories from './reducers';

const initialState = {
  categories: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_CATEGORIES:
      return categories.saveCategories(state, action);
    default:
      return state;
  }
}
