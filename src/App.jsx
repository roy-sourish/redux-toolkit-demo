import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store/features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(cartActions.calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
