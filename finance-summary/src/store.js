import { createStore } from "redux";
import { financeReducer } from "./reducers";

const store = createStore(financeReducer);

export default store;
