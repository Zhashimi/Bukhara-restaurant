import React from "react";
import Wrapper from "../assets/wrappers/MealList";
import MenuItem from "./MenuItem";
import itemImage from "../assets/images/menuItem.jpg";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearCart,
} from "../redux/features/CartSlice";
const MenuList = ({ meals }) => {
  if (!meals) {
    return <h4 style={{ textAlign: "center" }}>No matching meal found...</h4>;
  }
  const formattedMeals = meals.map((meal) => {
    const {
      idMeal,
      strArea,
      strCategory,
      strInstructions,
      strMealThumb = `${itemImage}`,
      strMeal,
    } = meal;
    return {
      id: idMeal,
      country: strArea,
      category: strCategory,
      instruction: strInstructions,
      image: strMealThumb || "",
      name: strMeal,
      price: 26.7,
    };
  });
  const dispatch = useDispatch();

  const handleAddToCart = (meal) => {
    dispatch(addItemToCart(meal));
  };
  return (
    <Wrapper>
      {formattedMeals.map((meal) => {
        return (
          <MenuItem
            key={meal.id}
            meal={meal}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </Wrapper>
  );
};

export default MenuList;
