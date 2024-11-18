import React from "react";
import { useSelector } from "react-redux";
import Wrapper, { Header } from "../assets/wrappers/CartPage";
import CartItem from "../components/CartItem";
import { useDispatch } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "../functions";
import { openModal } from "../redux/features/ModalSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (getTotalQuantity(cartItems) < 1) {
    return (
      <section>
        <Header>
          <h2>Your bag</h2>
          <h4>is currently empty</h4>
        </Header>
      </section>
    );
  }

  return (
    <Wrapper>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>{" "}
      <hr />
      <footer>
        <h4>
          Total <span>${getTotalPrice(cartItems).toFixed(2) || 0}</span>
        </h4>
        <button className="clear-btn" onClick={() => dispatch(openModal())}>
          Clear Cart
        </button>
        <button className="confirm-btn">
          <Link to="/order">check out</Link>
        </button>
      </footer>
    </Wrapper>
  );
};

export default Cart;
