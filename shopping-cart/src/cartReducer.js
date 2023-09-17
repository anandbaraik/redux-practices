import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CALCULATE_TOTAL,
  UPDATE_QUANTITY
} from "./actions";
const initialState = { cartItems: [], total: 0 };
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const isProductExistInCart = state.cartItems.find(
        ({ id }) => id === action.payload.id
      );
      if (isProductExistInCart) {
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return {
          ...state,
          cartItems: updatedCartItems
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )
      };
    case CALCULATE_TOTAL:
      return {
        ...state,
        total: state.cartItems.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        )
      };
    case UPDATE_QUANTITY:
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.productId) {
          // return { ...item, quantity: item.quantity + 1 };
          return Object.assign({}, item, { quantity: action.payload.quantity });
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCartItems
      };
    default:
      return state;
  }
};

export default cartReducer;
