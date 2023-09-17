import { createStore } from "redux";
import cookieReducer from "./cookiesReducer";
cookieReducer;

const store = createStore(
  cookieReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => updateCookie());

const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const cookieDiv = document.getElementById("cookie-count");

addBtn.addEventListener("click", () => {
  store.dispatch({ type: "cookies/added" });
});
removeBtn.addEventListener("click", () => {
  store.dispatch({ type: "cookies/removed" });
});

const updateCookie = () => {
  const { cookie } = store.getState();
  cookieDiv.textContent = cookie;
};
