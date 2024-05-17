import React from "react";
import { useSelector } from "react-redux";

import { cartActions } from "../store/cartSlice";
import CartItem from "./CartItem";

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);
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
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
}

export default CartContainer;
