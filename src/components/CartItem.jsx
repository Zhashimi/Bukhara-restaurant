import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/features/CartSlice";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/CartItem";

const CartItem = ({ cartItem }) => {
  const { id, image, name, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItemFromCart(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(incrementQuantity(id));
          }}
        >
          <FaChevronUp />
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (quantity === 1) {
              dispatch(removeItemFromCart(id));
              return;
            }
            dispatch(decrementQuantity(id));
          }}
        >
          <FaChevronDown />
        </button>
      </div>
    </Wrapper>
  );
};

export default CartItem;
