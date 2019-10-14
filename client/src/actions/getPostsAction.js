export const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING";
export const FETCH_POSTS_SUCCES = "FETCH_POSTS_SUCCES";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export function fetchPostsPending() {
  return {
    type: FETCH_POSTS_PENDING
  };
}
export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCES,
    posts
  };
}
export function fetchPostsError(error) {
  return {
    type: FETCH_POSTS_ERROR,
    error: error
  };
}
