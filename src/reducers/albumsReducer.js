export default function reducer(state = {
  albums: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCH_ALBUMS": {
      return { ...state, fetching: true }
    };
    case "FETCH_ALBUMS_ERROR": {
      return { ...state, fetching: false, error: action.values }
    };
    case "FETCH_ALBUMS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        albums: action.values
      }
    }
    default: return state;
  }
  return state;
}