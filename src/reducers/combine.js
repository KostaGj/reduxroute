import { combineReducers } from "redux";

import posts from "./postsReducer";
import albums from "./albumsReducer";
import comments from "./commentsReducer";

export default combineReducers({
  posts,
  albums,
  comments
});