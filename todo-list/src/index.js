import { createStore } from "redux";
import todoReducer from "./todosReducer";
import { addTodo, removeTodo } from "./actions";

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => displayTodos());

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const text = todoInput.value;
  if (text) {
    store.dispatch(addTodo(text));
    todoInput.value = "";
  }
});

window.removeTodoHandler = (index) => {
  store.dispatch(removeTodo(index));
};

const displayTodos = () => {
  const { todos } = store.getState();
  todoList.innerHTML = todos
    .map((todo, index) => {
      return `<li>
      ${todo} <button onclick="removeTodoHandler(${index})">Remove</button>
      </li>`;
    })
    .join("");
};
