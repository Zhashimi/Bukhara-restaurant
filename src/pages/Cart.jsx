import React from "react";
import { useSelector } from "react-redux";
import Wrapper, { Header } from "../assets/wrappers/CartPage";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/features/CartSlice";
import { useDispatch } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "../functions";
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
          Total <span>${getTotalPrice(cartItems) || 0}</span>
        </h4>
        <button className="clear-btn" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
        <button className="confirm-btn">Confirm</button>
      </footer>
    </Wrapper>
  );
};

export default Cart;
