import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/MealCard";
import { BsCart4 } from "react-icons/bs";

const MenuItem = ({ meal, handleAddToCart }) => {
  const { id, image, name, country, category } = meal;
  return (
    <Wrapper>
      <div className="img-container">
        {image && <img src={image} alt={name} className="img" />}
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{country}</h5>
        <h5>{category}</h5>
        <div className="footer-items">
          <Link to={`/meals/${id}`} className="btn">
            details
          </Link>
          <button className="cart" onClick={() => handleAddToCart(meal)}>
            <BsCart4 />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default MenuItem;
