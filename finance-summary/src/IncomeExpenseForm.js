import React, { useState } from "react";
import { addIncome, addExpense } from "./actions";
import { useDispatch } from "react-redux";
export const IncomeExpenseForm = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleAddIncome = () => {
    dispatch(addIncome(parseFloat(amount)));
    setAmount(0);
  };
  const handleAddExpense = () => {
    dispatch(addExpense(parseFloat(amount)));
    setAmount(0);
  };
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddIncome}>Add income</button>
      <button onClick={handleAddExpense}>Add expense</button>
    </div>
  );
};
