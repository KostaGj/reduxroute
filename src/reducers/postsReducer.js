export default function reducer(state = {
  posts: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCH_POSTS": {
      return { ...state, fetching: true }
    };
    case "FETCH_POSTS_ERROR": {
      return { ...state, fetching: false, error: action.values }
    };
    case "FETCH_POSTS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.values
      }
    }
    default: return state;
  }
  return state;
}