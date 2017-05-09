export function saveFeed(state, action) {
  return { ...state, ...{ feedList: action.payload } };
}


