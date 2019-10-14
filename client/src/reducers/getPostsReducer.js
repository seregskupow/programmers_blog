import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCES,
  FETCH_POSTS_ERROR
} from "../actions/getPostsAction";


export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_POSTS_SUCCES:
     
    return {
        ...state,
        pending: false,
        posts: action.posts
      };
    case FETCH_POSTS_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error
      };
    };
    default: {
        return {
          ...state
        }
      };
  }
}

// export const getPosts = state => state.posts;
// export const getPostsPending = state => state.pending;
// export const getPostsError = state => state.error;
