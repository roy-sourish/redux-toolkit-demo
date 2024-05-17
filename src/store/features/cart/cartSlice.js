import { createSlice } from "@reduxjs/toolkit";

import cartItems from "../../../cartItems";

const initialCartState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    increase(state) {},
    decrease(state) {},
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
