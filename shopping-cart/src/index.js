import { createStore } from "redux";
import cartReducer from "./cartReducer";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  calculateTotal
} from "./actions";

const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => updateCart());

const products = [
  { id: 1, name: "Product 1", price: 1 },
  { id: 2, name: "Product 2", price: 3 },
  { id: 3, name: "Product 3", price: 3 },
  { id: 4, name: "Product 4", price: 4 }
];
const productListDiv = document.getElementById("product-list");
const cartTotalDiv = document.getElementById("cart-total");
const cartDiv = document.getElementById("cart-list");
const renderProducts = () => {
  productListDiv.innerHTML = products
    .map((product) => {
      return `<li>
        ${product.name} - Rs.${product.price}
        <button onclick="addToCartHandler(${product.id})">
        Add to cart
        </button>
      </li>`;
    })
    .join("");
};

const updateCart = () => {
  const { total, cartItems } = store.getState();
  cartDiv.innerHTML = cartItems
    .map((item) => {
      return `<li>
        ${item.name} - Rs.${item.price}
        <input type="number" min="1" value="${item.quantity}" onchange="updateQuantityHandler(${item.id}, event.target.value)"/>
        <button onclick="removeItemFromCartHandler(${item.id})">Remove</button>
      </li>`;
    })
    .join("");

  cartTotalDiv.innerHTML = `Cart total : ${total}`;
};

window.addToCartHandler = (id) => {
  const product = products.find((product) => product.id === id);
  if (product) {
    store.dispatch(addToCart(product));
    store.dispatch(calculateTotal());
  }
};

window.updateQuantityHandler = (id, qty) => {
  if (qty) {
    store.dispatch(updateQuantity(id, Number(qty)));
    store.dispatch(calculateTotal());
  }
};

window.removeItemFromCartHandler = (id) => {
  store.dispatch(removeFromCart(id));
  store.dispatch(calculateTotal());
};
renderProducts();
updateCart();
