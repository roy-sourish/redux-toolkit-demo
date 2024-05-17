import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../store/features/cart/cartSlice.js";
import { modalActions } from "../store/features/modal/modalSlice.js";

import CartItem from "./CartItem";

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  function handleClearCartModal() {
    dispatch(modalActions.openModal());
  }

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleClearCartModal}>
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
