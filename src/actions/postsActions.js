import axios from "axios";

export function fetchPosts() {
  return function (dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      dispatch({ type: "FETCH_POSTS_SUCCESS", values: response.data });
    }).catch((err) => {
      dispatch({ type: "FETCH_POSTS_ERROR", values: err });
    });
  }
}