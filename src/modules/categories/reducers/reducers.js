export function saveCategories(state, action) {
  return { ...state, ...{ categories: action.payload } };
}
