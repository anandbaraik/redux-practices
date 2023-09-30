import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleClick = (type) => {
    dispatch({ type });
  };
  return (
    <div className="App">
      <h1>counter : {counter}</h1>
      <button onClick={() => handleClick("add")}>Add</button>
      <button onClick={() => handleClick("minus")}>Minus</button>
    </div>
  );
}
