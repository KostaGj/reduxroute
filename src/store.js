import { applyMiddleware, createStore } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import combine from "./reducers/combine";

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(combine, middleware);