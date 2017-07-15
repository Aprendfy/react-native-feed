export function saveFeed(state, { payload }) {
  const payloadCategory = Object.keys(payload)[0];

  if (Object.prototype.hasOwnProperty.call(state.posts, payloadCategory)) {
    const categoryPosts = [...state.posts[payloadCategory], ...payload[payloadCategory]];
    return { posts: { ...state.posts, [payloadCategory]: categoryPosts } };
  }
  return { posts: { ...state.posts, ...payload } };

}

