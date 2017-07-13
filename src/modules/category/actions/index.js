import { SAVE_CATEGORIES } from './types';
import { getAllCategories } from '../../../services/aprendfy';

export function fetchCategories() {
  return async (dispatch) => {
    const categories = await getAllCategories();
    dispatch(saveCategories(categories));
  };
}

export function saveCategories(payload) {
  return {
    type: SAVE_CATEGORIES,
    payload
  };
}

