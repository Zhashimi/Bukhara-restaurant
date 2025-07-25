import Wrapper from "../assets/wrappers/Modal";
import { clearCart } from "../redux/features/CartSlice";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/features/ModalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Modal;
