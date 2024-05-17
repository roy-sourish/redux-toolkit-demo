import { useDispatch } from "react-redux";
import { modalActions } from "../store/features/modal/modalSlice";
import { cartActions } from "../store/features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  function handleModalClose() {
    dispatch(modalActions.closeModal());
  }
  function handleClearCart() {
    dispatch(cartActions.clearCart());
    handleModalClose();
  }
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={handleClearCart}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={handleModalClose}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
