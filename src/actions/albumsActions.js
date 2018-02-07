import axios from "axios";

export function fetchAlbums() {
  return function (dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((response) => {
      dispatch({ type: "FETCH_ALBUMS_SUCCESS", values: response.data });
    }).catch((err) => {
      dispatch({ type: "FETCH_ALBUMS_ERROR", values: err });
    });
  }
}