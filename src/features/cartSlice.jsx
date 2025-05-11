import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  addToCart: (state, action) => {
  // Check if the item already exists in the cart
  const existingItem = state.cart.find((item) => item.id === action.payload.id);

  if (existingItem) {
    // If the item exists, do nothing or update quantity if needed
    // If you want to update quantity instead of doing nothing, use the next line:
    // existingItem.quantity += 1;
  } else {
    // If the item doesn't exist, add it to the cart
    state.cart.push({ ...action.payload, quantity: 1 });
  }
},

    removeItem: (state, action) => {
      const itemToRemove = state.cart.find((item) => item.id === action.payload);
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity; // Adjust total quantity
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity; // Adjust total price
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
increaseItemQuantity: (state, action) => {
  const item = state.cart.find((item) => item.id === action.payload);
  if (item) {
    item.quantity += 1;
    // state.totalQuantity += 1;
    state.totalPrice += item.price;
  }
},

decreaseItemQuantity: (state, action) => {
  const item = state.cart.find((item) => item.id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    state.totalQuantity -= 1;
    state.totalPrice -= item.price;
  }
},

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseFloat(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
