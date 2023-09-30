import { Provider } from "react-redux";
import { FinanceSummery } from "./FinanceSummery";
import { IncomeExpenseForm } from "./IncomeExpenseForm";
import store from "./store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IncomeExpenseForm />
        <FinanceSummery />
      </div>
    </Provider>
  );
}
