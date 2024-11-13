import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/CartSlice";
import modalReducer from "./features/ModalSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
