import React from "react";
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";

import { cartActions } from "../store/features/cart/cartSlice";

function CartItem({ id, title, amount, price, img }) {
  const dispatch = useDispatch();

  function handleIncreaseAmount() {
    dispatch(cartActions.increase(id));
  }
  function handleDecreaseAmount() {
    if (amount === 1) {
      dispatch(cartActions.remove(id));
    } else {
      dispatch(cartActions.decrease(id));
    }
  }
  function handleRemoveItem() {
    dispatch(cartActions.remove(id));
  }
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={handleRemoveItem}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={handleIncreaseAmount}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={handleDecreaseAmount}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
