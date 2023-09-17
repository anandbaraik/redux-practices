export const ADD_TO_CART = "cart/added";
export const REMOVE_FROM_CART = "cart/removed";
export const CALCULATE_TOTAL = "cart/calculateTotal";
export const UPDATE_QUANTITY = "cart/updatedQuantity";

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { id: productId }
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity }
});

export const calculateTotal = () => ({
  type: CALCULATE_TOTAL
});
