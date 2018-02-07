import axios from "axios";

export function fetchComments() {
  return function (dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      dispatch({ type: "FETCH_COMMENTS_SUCCESS", values: response.data });
    }).catch((err) => {
      dispatch({ type: "FETCH_COMMENTS_ERROR", values: err });
    });
  }
}