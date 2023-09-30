import { applyMiddleware, createStore } from "redux";
import { financeReducer } from "./reducers";
import loggerMiddleware from "./loggerMiddleware";
const store = createStore(financeReducer, applyMiddleware(loggerMiddleware));

export default store;
