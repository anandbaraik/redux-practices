import React from "react";
import { useSelector } from "react-redux";
export const FinanceSummery = () => {
  const { income, expenses } = useSelector((state) => state);
  return (
    <div>
      <h3>Finance Summery</h3>
      <p>Income: $ {income}</p>
      <p>Expeses: ${expenses}</p>
      <p>Balance: ${income - expenses}</p>
    </div>
  );
};
