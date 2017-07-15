export function saveFeed(state, action) {
  return { posts: { ...state.posts, ...action.payload } };
}
