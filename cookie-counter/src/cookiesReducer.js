const initialState = { cookie: 0 };

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cookies/added":
      return { cookie: state.cookie + 1 };
    case "cookies/removed":
      return { cookie: state.cookie - 1 };
    default:
      return state;
  }
};

export default cookieReducer;
