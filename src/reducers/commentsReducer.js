export default function reducer(state = {
  comments: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCH_COMMENTS": {
      return { ...state, fetching: true }
    };
    case "FETCH_COMMENTS_ERROR": {
      return { ...state, fetching: false, error: action.values }
    };
    case "FETCH_COMMENTS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        comments: action.values
      }
    }
    default: return state;
  }
  return state;
}