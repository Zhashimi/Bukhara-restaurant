import React, { useState } from "react";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/MealPage";
import TruncatedParagraph from "../components/TruncatedParagraph";
import { useQuery } from "@tanstack/react-query";
const singleMealUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const singleMealQuery = (id) => {
  return {
    queryKey: ["meals", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleMealUrl}${id}`);
      return data;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleMealQuery(id));
    return { id };
  };
function Meal() {
  const { id } = useLoaderData();
  const { data } = useQuery(singleMealQuery(id));
  const meal = data.meals[0];
  const {
    strMeal: name,
    strArea: country,
    strCategory: category,
    strInstructions: instruction,
    strYoutube: video,
    strMealThumb: image,
  } = meal;

  const validIngredients = Object.keys(meal)
    .filter(
      (key) =>
        key.startsWith("strIngredient") &&
        meal[key] !== null &&
        meal[key] !== "" &&
        meal[key] !== " "
    )
    .map((key) => meal[key]);
  if (!meal) {
    return <Navigate to="/menu" />;
  }

  return (
    <Wrapper>
      <header>
        <Link to="/menu" className="btn">
          Back to menu
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="meal">
        <img src={image} alt={name} className="img" />
        <div className="meal-info">
          <p>
            <span className="meal-data">Name:</span>
            {name}
          </p>{" "}
          <p>
            <span className="meal-data">Country:</span>
            {country}
          </p>{" "}
          <p>
            <span className="meal-data">Category:</span>
            {category}
          </p>{" "}
          <p>
            <span className="meal-data">Ingredient:</span>
            {validIngredients.map((ingredient, index) => {
              return (
                <span className="ing" key={index}>
                  {ingredient}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="meal-data">Instruction:</span>
            <TruncatedParagraph text={instruction} />
          </p>{" "}
          <a className="btn" href={video}>
            Video
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Meal;
