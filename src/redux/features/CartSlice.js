import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity--;
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
