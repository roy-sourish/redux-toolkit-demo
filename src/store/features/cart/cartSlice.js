import { createSlice } from "@reduxjs/toolkit";

import cartItems from "../../../cartItems";

const initialCartState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    increase(state, action) {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount++;
    },
    decrease(state, action) {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      // if (cartItem.amount != 0) cartItem.amount--;
      cartItem.amount--;
    },
    remove(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.amount--;
    },
    clearCart(state) {
      state.cartItems = [];
      state.amount = 0;
    },
    calculateTotals(state) {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
