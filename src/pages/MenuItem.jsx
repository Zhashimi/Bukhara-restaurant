import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/MealCard";

const MenuItem = ({ meal }) => {
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
        <Link to={`/meals/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};

export default MenuItem;
