const initialState = {
  expenses: 0,
  income: 0
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: state.expenses + action.payload
      };
    case "ADD_INCOME":
      return {
        ...state,
        income: state.income + action.payload
      };
    default:
      return state;
  }
};

export { financeReducer };
